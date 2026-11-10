import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, statSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlFiles = readdirSync(root).filter((name) => name.toLowerCase().endsWith('.html'));
const jsDir = path.join(root, 'assets', 'js');
const jsFiles = readdirSync(jsDir).filter((name) => name.endsWith('.js'));
const errors = [];
let checkedLinks = 0;

function exactCaseExists(target) {
  let current = root;
  for (const part of path.relative(root, target).split(path.sep)) {
    if (!readdirSync(current).includes(part)) return false;
    current = path.join(current, part);
  }
  return true;
}

for (const name of jsFiles) {
  try {
    execFileSync(process.execPath, ['--check', path.join(jsDir, name)], { stdio: 'pipe' });
  } catch (error) {
    errors.push(`assets/js/${name}: JavaScript syntax error\n${error.stderr?.toString() ?? ''}`);
  }
}

for (const name of htmlFiles) {
  const file = path.join(root, name);
  const html = readFileSync(file, 'utf8');
  const tagPattern = /<(?:script|link|a|img|video|source)\b[^>]*?\b(?:src|href)\s*=\s*["']([^"']+)["'][^>]*>/gi;
  for (const match of html.matchAll(tagPattern)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(raw)) continue;
    const pathname = raw.split(/[?#]/, 1)[0];
    if (!/\.(?:html|css|js|png|jpe?g|webp|gif|ico|svg|mp4)$/i.test(pathname)) continue;
    checkedLinks++;
    if (pathname.startsWith('/')) {
      errors.push(`${name}: root-relative link ${raw} will break on a GitHub Pages project URL`);
      continue;
    }
    let decoded;
    try {
      decoded = decodeURIComponent(pathname);
    } catch {
      errors.push(`${name}: malformed URL ${raw}`);
      continue;
    }
    const target = path.resolve(path.dirname(file), decoded);
    if (!target.startsWith(root + path.sep) || !existsSync(target) || !exactCaseExists(target) || !statSync(target).isFile()) {
      errors.push(`${name}: missing local file ${raw}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`OK: ${jsFiles.length} JavaScript files and ${checkedLinks} local page/asset links`);
}
