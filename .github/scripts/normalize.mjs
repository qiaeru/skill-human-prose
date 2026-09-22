// Applies French rule 14 of the skill to the markdown files passed as
// arguments: narrow no-break space (U+202F) before ";", "!", "?", "%", and
// the closing guillemet and after the opening one, regular no-break space
// (U+00A0) before ":". Skips frontmatter, code blocks and spans, link
// targets, URLs, and table separators. Idempotent, and paired with
// validate.mjs, which checks the result. Needed because Claude Code's editing
// tools flatten both no-break spaces into plain spaces.
// Usage: node .github/scripts/normalize.mjs skills/writing-human-prose/references/fr/*.md
import { readFileSync, writeFileSync } from 'node:fs';

const NARROW = '\u202F';
const REGULAR = '\u00A0';
const TOKEN = '\u0001';
const SPACES = '[\u0020\u00A0\u202F]+';

const transform = (segment) =>
  segment
    .replace(new RegExp(SPACES + '([?!;%\u00BB])', 'g'), NARROW + '$1')
    .replace(new RegExp('\u00AB' + SPACES, 'g'), '\u00AB' + NARROW)
    .replace(new RegExp(SPACES + ':', 'g'), REGULAR + ':');

const processLine = (line) => {
  const saved = [];
  const save = (s) => {
    saved.push(s);
    return TOKEN + (saved.length - 1) + TOKEN;
  };
  const t = line
    .replace(/`[^`]*`/g, save)
    .replace(/\]\([^)]*\)/g, save)
    .replace(/https?:\/\/\S+/g, save);
  return transform(t)
    .split(TOKEN)
    .map((piece, i) => (i % 2 === 1 ? saved[Number(piece)] : piece))
    .join('');
};

for (const file of process.argv.slice(2)) {
  const lines = readFileSync(file, 'utf8').split('\n');
  let inFence = false;
  let inFrontmatter = false;
  const output = lines.map((raw, i) => {
    if (i === 0 && raw.trim() === '---') {
      inFrontmatter = true;
      return raw;
    }
    if (inFrontmatter) {
      if (raw.trim() === '---') inFrontmatter = false;
      return raw;
    }
    if (/^\s*(```|~~~)/.test(raw)) {
      inFence = !inFence;
      return raw;
    }
    if (inFence) return raw;
    if (/^\s*\|(\s*:?-{3,}:?\s*\|)+\s*$/.test(raw)) return raw;
    return processLine(raw);
  });
  writeFileSync(file, output.join('\n'));
  console.log(`normalized ${file}`);
}
