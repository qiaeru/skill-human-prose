# Human prose skill

`writing-human-prose`, a Claude Code skill that removes predictable AI writing patterns from English and French prose, or flags them without rewriting.

The skill treats two failure modes as slop. The first is the familiar AI gloss: filler phrases, formulaic contrasts, signature vocabulary ("delve," "leverage," "seamless"; « véritable », « permettre de », « implémenter »), vague declaratives, and pull-quote bait. The second is overcorrection: prose chopped into slogans, or made casual on purpose to "sound human," which reads as machine-made as the gloss. The target sits between them. The tells differ by language, so the rules do too: English prose is pushed toward fluent, natural US English with concrete subjects and varied rhythm, while French prose is pushed away from the short sentences calqued on English toward sentences articulated by subordination, with French typography.

The name says what the prose should sound like, not what a detector should conclude. The skill counts the fake typo and the bolted-on casualness among the tells, and in audit mode it names and quotes patterns without guessing who wrote a text.

Whatever the language, the rewrite stays faithful to the source: it adds no number, cause, or actor the original doesn't contain, changes only what a check flags so the author recognizes the result as their own draft, and flags a vague passage to the author rather than fill it in.

## Credits

This skill was inspired by several other skills, including [stop-slop](https://github.com/hardikpandya/stop-slop) by Hardik Pandya, [humanizer](https://github.com/blader/humanizer) by Siqi Chen, [no-ai-slop](https://github.com/petergyang/no-ai-slop) by Peter Yang, [anti-ai-slop-writing](https://github.com/jalaalrd/anti-ai-slop-writing) by jalaalrd, [SlopMonster](https://github.com/ItsssssJack/SlopMonster), and [anti-slop](https://github.com/miqdadbadjuber/anti-slop) by Miqdad Badjuber.

## Layout

```text
skill-human-prose/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── .github/
│   ├── scripts/
│   │   ├── normalize.mjs
│   │   └── validate.mjs
│   ├── workflows/
│   │   └── validate.yml
│   ├── dependabot.yml
│   └── FUNDING.yml
├── evals/
│   └── <language>-<case>/
│       ├── prompt.md
│       └── graders/
├── .gitattributes
├── .gitignore
├── .markdownlint-cli2.jsonc
├── README.md
├── CHANGELOG.md
├── LICENSE
└── skills/
    └── writing-human-prose/
        ├── SKILL.md
        └── references/
            ├── en/
            │   ├── rules.md
            │   ├── phrases.md
            │   ├── structures.md
            │   ├── examples.md
            │   └── ui-strings.md
            └── fr/
                ├── rules.md
                ├── tournures.md
                ├── structures.md
                ├── typographie.md
                ├── interfaces.md
                └── exemples.md
```

[SKILL.md](skills/writing-human-prose/SKILL.md) holds everything that doesn't depend on the language: the process, the output contract, voice and register, the weighing of tells, and the final read. It sends Claude to the rules file of the text's language, [en/rules.md](skills/writing-human-prose/references/en/rules.md) or [fr/rules.md](skills/writing-human-prose/references/fr/rules.md), which holds that language's default register, core rules, single-instance tells, and quick checks, and points to its catalogs and before-and-after examples. Each trigger loads the shared core and one language only. The French files are written in French, since their rules and examples are French.

The repository doubles as a Claude Code plugin named `writing-human-prose` and as its own plugin marketplace: `plugin.json` describes the plugin (the whole repository, with the skill under `skills/`), and `marketplace.json` lists it so Claude Code can install and update it straight from GitHub.

On every push, every pull request, and once a week, the [validate.yml](.github/workflows/validate.yml) workflow checks the manifests (`plugin validate`), markdown hygiene (`markdownlint-cli2`), and the repository invariants in [validate.mjs](.github/scripts/validate.mjs): the skill frontmatter, relative links confined to the installable folder, the em dash anywhere, the loud AI vocabulary in English prose, French typography and a few French tells in the French references, contents lists aligned with their titles, numbered references to rules and examples that still exist, a size budget on the files loaded at every trigger, and the plugin version and descriptions aligned with the skill, the marketplace, and the latest release. [normalize.mjs](.github/scripts/normalize.mjs) restores the French no-break spaces on the markdown files passed to it, since editing tools tend to flatten them.

## Installation

The recommended path is the Claude Code plugin; copying the folder by hand stays available as a fallback.

### As a plugin (recommended)

Inside Claude Code, add this repository as a marketplace, then install the plugin:

```text
/plugin marketplace add qiaeru/skill-human-prose
/plugin install writing-human-prose@skill-human-prose
```

When a new version is published, update it with `/plugin update writing-human-prose`, or let Claude Code's automatic update pick it up.

### By manual copy

Copy the [skills/writing-human-prose/](skills/writing-human-prose/) folder into a project's `.claude/skills/` directory, or into `~/.claude/skills/` for all your projects, then restart Claude Code. Re-copy the folder and restart after each update, since skill content is not hot-reloaded.

## Usage

The skill triggers whenever you ask Claude to draft, edit, or review English or French text, including interface strings and locale files; Claude recognizes the request from the skill's `description`. You can also invoke it by name for a full pass (`/writing-human-prose:writing-human-prose`), which forces a rule-by-rule review against the reference catalogs.

- Paste a few paragraphs of your own writing along with the text, and the skill matches that sample's register and keeps its habits, removing only the single-instance tells; when the sample itself uses one (an em dash, say), the note says so in one line and you can put it back.
- Ask it to draft a text, and it delivers the text alone, with one line only if the request leaves out a fact the text needs.
- Point it at a file, and it rewrites only the prose, leaving code, frontmatter, and link targets untouched. Called from another task (a commit message, a pull request description), it returns the final text alone.
- Ask whether a text reads as AI-written, or to flag its tells without touching it, and it returns an audit: a numbered list of tells, each quoted, named, paired with a fix in a few words, and marked high or low priority, with no rewrite and no guess about who wrote it. You then pick the numbers to fix.

A rewrite comes back with the count of quick checks still failing and a short note of what changed. The final read also asks four yes-or-no questions on the whole text (does it sound like a person who writes well in that language, would the author recognize it, does it pass read aloud, does every sentence earn its place), and a failing check or a "no" triggers one bounded rewrite. There is no score, since a model grading its own rewrite hands out eights and nines whatever the text.

## Quick test

To check that the skill is loaded, give Claude one of the paragraphs below and ask it to improve it with `writing-human-prose`. Each packs most of the covered tells for its language on purpose.

> In today's fast-paced digital landscape, leveraging AI isn't just a game-changer; it's a necessity. The result? Teams that seamlessly navigate complexity. No fluff. No filler. Just results. Moreover, it's important to note that this approach truly empowers organizations to unlock their full potential. Whether you're a scrappy startup or a Fortune 500, the implications are significant. Let that sink in.

Or, in French:

> À noter que cette solution représente un véritable enjeu stratégique majeur, permettant ainsi aux équipes d'implémenter une démarche d'amélioration continue, tout en garantissant une scalabilité optimale. En effet, par ailleurs, il est important de souligner que ce n'est pas une simple mise à jour, c'est une refonte fondamentale. Cette solution est simple, intuitive et performante. La solution s'adapte. La solution répond aux besoins. Voyons cela ensemble. En définitive, la solution permet véritablement de réaliser des gains de productivité significatifs.

If the skill is active, Claude rewrites the paragraph as connected sentences (by subordination in French), drops the loud vocabulary, the contrasts, and the closers, reports a count of failing checks at or near zero, and invents no figure or gain the paragraph never states. If the reply keeps the fragments, adds bullet points, or pads the rewrite with made-up numbers, the skill was not loaded. To test the audit, submit the same paragraph and ask whether it reads as AI-written.

## Evaluations

The [evals/](evals/) folder holds sixteen cases for `claude plugin eval`. Seven run in each language, one per regime of the skill: the quick-test paragraph, an audit with no rewrite, a review request that doesn't name the skill, a drafting request that doesn't name it either, a locale file, a casual blog post, and a clean paragraph that should come back nearly untouched. Two more run in English only: a writing sample that conflicts with a rule the skill still enforces, and a paragraph in a language the skill doesn't cover. A judge model grades each response against written criteria, and the trigger cases also check that the skill was loaded. Run them after changing the skill to catch a regression:

```text
npx -y @anthropic-ai/claude-code plugin eval . --runs 1 --ablation none --no-publish
```

Add `--case 'en-*'` or `--case 'fr-*'` to run one language. The command reuses Claude Code's credentials, subscription or API key, so it needs no setup but draws on your usage quota, about $0.15 to $0.20 per case. Without `--ablation none` it replays each case without the plugin for comparison, which doubles the cost, and without `--no-publish` it publishes the report to claude.ai. Results land in `evals/results/`, which git ignores. A judge voting on a single run varies from one run to the next, so rerun a failing case before drawing conclusions. The evals stay out of CI, which has no credentials.

## Limits

- The skill covers US English and French. A text in British, Canadian, or Australian English keeps its own spelling and punctuation under the same rules. For another language, it says so rather than transpose one of its rule sets.
- It is not a grammar or spell checker (for French, a dedicated tool such as Antidote or LanguageTool stays necessary), and it does not verify facts or arguments. It judges form: phrasing, structure, rhythm, typography.
- Its default register is plain American magazine prose in English and « soutenu courant » in French, and a text that holds its own register (a casual post, an internal note) keeps it. It deliberately skips fiction, poetry, lyrics, legal text, standardized administrative text, and direct quotes; the author keeps the final say.

## License

MIT, see [LICENSE](LICENSE).
