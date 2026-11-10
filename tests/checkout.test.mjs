import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(path.join(root, 'checkout.html'), 'utf8');
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .find((text) => text.includes('function placeOrder(event)'));
assert.ok(script, 'checkout inline script must exist');

function setup({ total = 100000, values = {} } = {}) {
  const fields = Object.fromEntries(
    Object.entries({ fullName: 'An', phone: '0912345678', email: '', address: '1 Phố Mới', city: 'Hà Nội', ...values })
      .map(([id, value]) => [id, { value, focused: false, focus() { this.focused = true; } }]),
  );
  const alerts = [];
  const removed = [];
  const context = vm.createContext({
    document: { addEventListener() {}, getElementById(id) { return fields[id]; } },
    localStorage: { removeItem(key) { removed.push(key); } },
    window: { location: { href: 'checkout.html' } },
    alert(message) { alerts.push(message); },
  });
  vm.runInContext(script, context, { filename: 'checkout.html:inline' });
  vm.runInContext(`globalSubtotal = ${total}`, context);
  let prevented = false;
  context.placeOrder({ preventDefault() { prevented = true; } });
  return { fields, alerts, removed, context, get prevented() { return prevented; } };
}

test('rejects an empty cart', () => {
  const result = setup({ total: 0 });
  assert.equal(result.prevented, true);
  assert.match(result.alerts[0], /Giỏ hàng đang trống/);
  assert.deepEqual(result.removed, []);
});

test('requires delivery information', () => {
  const result = setup({ values: { address: '' } });
  assert.match(result.alerts[0], /thông tin giao hàng bắt buộc/);
  assert.deepEqual(result.removed, []);
});

test('rejects an invalid phone number', () => {
  const result = setup({ values: { phone: '123' } });
  assert.match(result.alerts[0], /Số điện thoại không hợp lệ/);
  assert.equal(result.fields.phone.focused, true);
  assert.deepEqual(result.removed, []);
});

test('rejects an invalid optional email', () => {
  const result = setup({ values: { email: 'khong-hop-le' } });
  assert.match(result.alerts[0], /Email không hợp lệ/);
  assert.equal(result.fields.email.focused, true);
  assert.deepEqual(result.removed, []);
});

test('accepts valid delivery information and clears the demo cart', () => {
  const result = setup({ values: { email: 'an@example.com' } });
  assert.match(result.alerts[0], /Đơn hàng của bạn/);
  assert.deepEqual(result.removed, ['jade_chamber_cart']);
  assert.equal(result.context.window.location.href, 'index.html');
});
