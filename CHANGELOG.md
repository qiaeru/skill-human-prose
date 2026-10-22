# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Evals: a French code file whose comments keep plain spaces while its displayed strings take non-breaking ones.

### Fixed

- French: no more non-breaking spaces in code files. Comments, file header descriptions, docstrings, and log messages keep plain spaces, and only strings shown to the end user (interface labels, page text, locale values) take them.

## [1.2.0] - 2026-10-21

### Added

- A reply that re-explains what its reader already knows (their own problem, the diagnosis, the proof) before reaching the decision, with an example in each language.
- Text that describes itself now covers how it was compiled or checked and a layout the reader can already see, not only what it replaced.
- The spaced en dash and the double hyphen that stand in for a banned em dash count as the em dash; French treats the incise dash the same whatever its width, and a range keeps its en dash.
- A heading written for effect, and a sentence that names what the example before it showed.
- Validator: spaced en dashes and double hyphens in prose.
- Evals: a reply in a review thread.

### Changed

- English: a compound the dictionary always hyphenates ("third-party") keeps its hyphen after the noun.
- French: core rules 21 to 24 (assistant register, the objection nobody raised, staging, inflated significance) are gone, since the quick checks already carried them; their quoted cues and exceptions moved into the checks, and rule 25 became rule 21.

## [1.1.0] - 2026-09-23

### Added

- A process for drafting a text from scratch, with its own delivery: the text alone, no count and no list of changes.
- Invoking the skill by name opens the reference catalogs before correcting.
- When a writing sample uses a single-instance tell (an em dash, say), the note names the conflict so the author can overrule it.
- A fidelity check on scope and ranking words ("only," "first," "most"; « seul », « la plupart ») lost while reshaping a sentence.
- A test for objections nobody raised: cut the sentence that answers an earlier draft rather than informing the reader.
- English: stacked hyphenated compounds on one noun.
- French: "performant" and "innovant" join the empty adjectives.
- Validator: numbered references to rules and examples must exist, and SKILL.md and the rules files stay under a size budget.
- Evals: drafting in both languages, a writing sample that conflicts with a rule, and an unsupported language.

### Changed

- English now counts the not-X-but-Y contrast, the staged line, the objection nobody raised, and meta-commentary on a single instance, as French already did.
- Delivery notes follow the rules they report on: a few plain sentences, no bold labels, set apart from the corrected text.
- A gap the text admits is handled the same way in both languages: cut the guess, cut the admission unless the reader needs it, flag the gap to the author.
- British, Canadian, and Australian English keep their own spelling and punctuation.
- French: the table for repeated words offers only precise words, no longer synonyms that rotate a referent's name or reintroduce tells.
- Interface files: the micro-label checks now include intensifiers and typographic crutches in English, and "-ment" adverbs, empty adjectives, and hollow verbs in French.

### Fixed

- French examples 14, 20, and 32 added a word or a fact their "Before" lacked.

## [1.0.0] - 2026-09-22

- Initial release.
