// Checks the repo invariants that break silently, complementing the
// "plugin validate" step the workflow runs. Run locally with
// "node .github/scripts/validate.mjs" from the repo root.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const errors = [];
const report = (file, line, message) =>
  errors.push(line ? `${file}:${line} ${message}` : `${file} ${message}`);

const read = (file) => readFileSync(file, 'utf8');

// Prose covered by the link and typography checks. CLAUDE.md is gitignored
// and LICENSE is frozen legal text, so neither is in scope.
const proseFiles = ['README.md', 'CHANGELOG.md'];
const collectMarkdown = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const child = path.join(dir, entry.name);
    if (entry.isDirectory()) collectMarkdown(child);
    else if (entry.name.endsWith('.md')) proseFiles.push(child);
  }
};
collectMarkdown('skills');

// 1. Frontmatter of each SKILL.md: name equal to its folder, description
// present and under 300 characters. The runtime reads only these two fields.
const descriptions = {};
for (const skillName of readdirSync('skills')) {
  const dir = path.join('skills', skillName);
  if (!statSync(dir).isDirectory()) continue;
  const file = path.join(dir, 'SKILL.md');
  if (!existsSync(file)) {
    report(dir, null, 'missing SKILL.md');
    continue;
  }
  const block = read(file).match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) {
    report(file, 1, 'missing frontmatter');
    continue;
  }
  const fields = {};
  for (const line of block[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+)\s*:\s*(.*)$/);
    if (m) fields[m[1]] = m[2].trim();
  }
  if (fields.name !== skillName) {
    report(file, 2, `name "${fields.name}" differs from folder "${skillName}"`);
  }
  if (!fields.description) {
    report(file, 3, 'description missing from frontmatter');
  } else if ([...fields.description].length > 300) {
    report(file, 3, `description is ${[...fields.description].length} characters, maximum 300`);
  }
  descriptions[skillName] = fields.description;
}

// 2. Relative links: every target exists, and a link written from inside a
// skill folder stays confined to it, since a manual install copies only
// that folder.
const LINK_PATTERN = /\[[^\]]*\]\(([^)\s]+)\)/g;
for (const file of proseFiles) {
  const text = read(file);
  for (const m of text.matchAll(LINK_PATTERN)) {
    const target = m[1].split('#')[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    const line = text.slice(0, m.index).split('\n').length;
    const resolved = path.resolve(path.dirname(file), target);
    if (!existsSync(resolved)) {
      report(file, line, `dead link to ${target}`);
      continue;
    }
    const segments = file.split(path.sep);
    if (segments[0] === 'skills' && segments.length > 2) {
      const skillDir = path.resolve(segments[0], segments[1]);
      if (!resolved.startsWith(skillDir + path.sep) && resolved !== skillDir) {
        report(file, line, `link to ${target}, outside the skill's installable folder`);
      }
    }
  }
}

// French reference files follow French typography, the rules they teach;
// every other prose file follows the English conventions.
const isFrench = (file) => file.includes(`${path.sep}references${path.sep}fr${path.sep}`);

// 3. Typography: the em dash is a single-instance tell in both languages,
// and the repo's prose is the skill's own test bed. Syntactic exceptions:
// frontmatter, code fences and spans, link targets, URLs, table separators.
// The character is only tolerated as a parenthesized mention "(—)". French
// files also carry the no-break spaces of French rule 14, which the editing
// tools flatten and normalize.mjs restores.
const CHECKS = [
  [/—/, 'em dash in prose; use a comma, a period, or parentheses'],
];
const FRENCH_CHECKS = [
  [/\u0020[?!;%»]/, 'plain space before double punctuation or closing guillemet, narrow no-break space U+202F expected'],
  [/«\u0020/, 'plain space after opening guillemet, narrow no-break space U+202F expected'],
  [/\u00A0[?!;%»]/, 'regular no-break space before double punctuation or closing guillemet, narrow U+202F expected'],
  [/«\u00A0/, 'regular no-break space after opening guillemet, narrow U+202F expected'],
  [/[\u0020\u202F]:/, 'plain or narrow space before a colon, regular no-break space U+00A0 expected'],
];

// Tells the repo's prose may only mention, never use. Quoted spans, table
// rows (the "Avoid" columns of the references), code, links, and URLs are
// stripped before the check; blockquotes and the "Avant" lines of the
// French examples are skipped as quoted material. English files: the loud
// AI vocabulary removed on sight. French files: the tells of French rules
// 13, 14, 20, and 25.
const MENTION_CHECKS = [
  [
    /\b(?:delve|delving|leverage[sd]?|leveraging|seamless(?:ly)?|tapestry|testament|game-changer|myriad|plethora)\b/i,
    'loud AI vocabulary in prose; use the plain word, or quote it as a mention',
  ],
];
const FRENCH_MENTION_CHECKS = [
  [/(?:\d+|[IVXL]+)(?:ème|èmes|ère|ères)\b/u, 'ordinal in "ème", French abbreviation expected (1er, 1re, 2e)'],
  [
    /(?:^|[^\p{L}'’])(?:Etat|Etats|Ecole|Elève|Eglise|Egalité|Ile|Etude|Etape|Equipe|Election|Emission|Evolution|Edition|Editeur|Etranger|Evidemment|Egalement|Etant)\b/u,
    'unaccented capital, accented capital expected',
  ],
  [
    /(?:^|[\s(])A (?:propos|noter|ce|cet|cette|la|le|les|l'|partir|priori|posteriori|travers|savoir|titre|terme|court|long|moyen|cause|condition|défaut)\b/u,
    'unaccented capital, "À" expected',
  ],
  [/\p{L}\/\p{L}/u, 'slash between two words, "ou", "et", or a rewording expected'],
  [/\.\.\./, 'three typed dots, the single character … expected'],
  [
    /(?:^|[^_\w-])(?:skills?|plugins?|frontmatter|markdown|workflows?|commits?|push|pull requests?|marketplace)(?![\w-]|\.md|\.json|\.yml)/i,
    'unnaturalized English term in roman, italics expected (French rule 25)',
  ],
];
for (const file of proseFiles) {
  const french = isFrench(file);
  const lines = read(file).split(/\r?\n/);
  let inFence = false;
  let inFrontmatter = false;
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    if (i === 0 && raw === '---') {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (raw === '---') inFrontmatter = false;
      continue;
    }
    if (/^\s*(```|~~~)/.test(raw)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (/^\s*\|(\s*:?-{3,}:?\s*\|)+\s*$/.test(raw)) continue;
    const cleaned = raw
      .replace(/`[^`]*`/g, '')
      .replace(/\]\([^)]*\)/g, ']')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\(—\)/g, '');
    for (const [pattern, message] of french ? [...CHECKS, ...FRENCH_CHECKS] : CHECKS) {
      if (pattern.test(cleaned)) report(file, i + 1, message);
    }
    if (/^\s*(\||>)/.test(raw) || /^\*\*Avant\.\*\*/.test(raw)) continue;
    const cleanedMention = raw
      .replace(/`[^`]*`/g, '')
      .replace(/\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/«[^»]*»/g, '')
      .replace(/"[^"]*"/g, '');
    for (const [pattern, message] of french ? FRENCH_MENTION_CHECKS : MENTION_CHECKS) {
      if (pattern.test(cleanedMention)) report(file, i + 1, message);
    }
  }
}

// 3b. A reference file that opens on a "Contents" (French "Sommaire") list
// keeps it by hand, so its top-level entries must repeat its H2 titles in
// the same order, or adding or renaming a section drifts.
for (const file of proseFiles.filter((f) => f.includes(`${path.sep}references${path.sep}`))) {
  const lines = read(file).split(/\r?\n/);
  const start = lines.findIndex((l) => /^(Contents|Sommaire)/.test(l));
  if (start === -1) continue;
  const entries = [];
  for (const line of lines.slice(start + 1)) {
    if (line.startsWith('#')) break;
    const m = line.match(/^- (.+)$/);
    if (m) entries.push(m[1].trim());
  }
  const titles = lines.filter((l) => l.startsWith('## ')).map((l) => l.slice(3).trim());
  if (entries.join('\n') !== titles.join('\n')) {
    const missing = titles.filter((t) => !entries.includes(t));
    const orphans = entries.filter((e) => !titles.includes(e));
    const detail = [
      missing.length ? `missing from contents: ${missing.join(', ')}` : '',
      orphans.length ? `no matching section: ${orphans.join(', ')}` : '',
    ].filter(Boolean).join('; ') || 'order differs from the titles';
    report(file, start + 1, `contents out of line with the H2 titles (${detail})`);
  }
}

// 4. The plugin version tracks the latest released CHANGELOG version (the
// agreement a manual release lets drift first), and the plugin name still
// matches a skill folder.
const manifest = JSON.parse(read('.claude-plugin/plugin.json'));
const released = read('CHANGELOG.md').match(/^## \[(\d+\.\d+\.\d+)\]/m);
if (!released) {
  report('CHANGELOG.md', null, 'no released version found');
} else if (manifest.version !== released[1]) {
  report(
    '.claude-plugin/plugin.json',
    null,
    `version ${manifest.version} differs from the latest released CHANGELOG version ${released[1]}`,
  );
}
if (!existsSync(path.join('skills', manifest.name))) {
  report('.claude-plugin/plugin.json', null, `plugin name "${manifest.name}" matches no folder under skills/`);
}

// 5. The plugin description repeats the description of the skill of the
// same name, since the marketplace reads the first and the runtime the
// second; a trigger added to one must reach the other.
const skillDescription = descriptions[manifest.name];
if (skillDescription && manifest.description !== skillDescription) {
  report(
    '.claude-plugin/plugin.json',
    null,
    `description differs from the one in skills/${manifest.name}/SKILL.md`,
  );
}

// 6. The marketplace entry repeats the plugin description, since the
// install listing reads the first and the runtime the second.
const marketplace = JSON.parse(read('.claude-plugin/marketplace.json'));
for (const entry of marketplace.plugins ?? []) {
  if (entry.name === manifest.name && entry.description !== manifest.description) {
    report('.claude-plugin/marketplace.json', null, `description of plugin ${entry.name} differs from plugin.json`);
  }
}

if (errors.length > 0) {
  console.error(`${errors.length} invariant error(s):`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`Invariants checked on ${proseFiles.length} files: frontmatter, links, typography, mentions, contents, version, descriptions.`);
