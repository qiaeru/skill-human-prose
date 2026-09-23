# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
