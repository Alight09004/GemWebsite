import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.resolve(root, 'dist');
if (path.dirname(out) !== root || path.basename(out) !== 'dist') {
  throw new Error('Refusing to clean a directory outside the generated dist folder');
}
if (existsSync(out)) rmSync(out, { recursive: true, force: true });
mkdirSync(out);

for (const name of readdirSync(root).filter((file) => file.toLowerCase().endsWith('.html'))) {
  cpSync(path.join(root, name), path.join(out, name));
}
cpSync(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });
writeFileSync(path.join(out, '.nojekyll'), '');

console.log(`Built ${out}`);
