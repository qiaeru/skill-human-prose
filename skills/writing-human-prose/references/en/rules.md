# English Rules

Rules for US-English prose, read after SKILL.md whenever the text is in English: the default register, the core rules, the tells that count on a single instance, and the quick checks.

## Default register

Write fluent, natural US English in the register of plain American magazine prose (a good engineering blog, The Atlantic, a Paul Graham essay): conversational but precise, with contractions as normal written English, concrete subjects, real verbs, and a rhythm that varies because the ideas demand it. This register avoids both the AI gloss and the overcorrection that compresses prose into six-word slogans until it reads like a LinkedIn post.

## References

Open [phrases.md](phrases.md) when vocabulary or stock phrases cluster, [structures.md](structures.md) for tells of shape and rhythm, [examples.md](examples.md) to calibrate how far a rewrite should go, and [ui-strings.md](ui-strings.md) whenever the text comes from an interface.

## Core rules

The quick checks below are the working list; each rule here gives the principle, its counterweight, and where the detail lives.

1. **Write sentences that flow.** Most sentences carry one idea in roughly 12 to 25 words and connect to their neighbors; a short sentence is a tool for emphasis, once per stretch, and stacked fragments are as much a tell as bloat. The counterweight: the same conjunction at every seam is as mechanical as the fragments, and joining never invents a link, so two facts the source only sets side by side get a plain "and" or two sentences, never a "but," "so," or "because." A link the text makes evident without naming it (a closure announced, then appointments to move) counts as given and gets written. See [structures.md](structures.md).

2. **Cut filler phrases.** Throat-clearing openers, announced emphasis, marketing openers and closers, email boilerplate, and chat artifacts each have a family in [phrases.md](phrases.md).

3. **Use plain words.** Prefer the short word to the Latinate one ("use" over "utilize," "start" over "embark on"). The AI vocabulary, sorted into a loud tier and a borderline tier, the redefinition verbs, and the pleonasms are cataloged in [phrases.md](phrases.md).

4. **Break formulaic structures.** Binary contrasts, see-saws, rhetorical setups, consequence tails, and the other templates in [structures.md](structures.md) stand in for a claim; state the claim.

5. **Prefer active voice.** Put the actor at the front. The counterweight: passive stays when the actor is unknown or beside the point ("he was arrested in May"), and the tell is passive that dodges a known actor.

6. **No false agency.** Give a human verb back to the person the text points to, or say what the thing does; when the text names no one, keep the impersonal or passive form rather than invent an actor. Ordinary product verbs ("the report shows," "the form submits") are plain English. See [structures.md](structures.md).

7. **Be specific.** Replace a vague claim with the number, name, or concrete object the source provides, even if the sentence gets longer. The counterweight: never invent one to sound concrete; when the source gives nothing, keep the plain vague word or flag the gap. See [phrases.md](phrases.md).

8. **Stay with the case.** Where the text already speaks to its reader, "you" beats "people"; prefer the case the text describes to a generalization about everyone, and drop the voice that comments from a distance. Never invent a scene the source doesn't contain.

9. **Cut empty intensifiers and stacked hedges.** Adverbs that change the meaning stay, and one deliberate hedge is honesty; the tell is the stack, or a both-sides menu in place of a stance. See [phrases.md](phrases.md).

10. **Kill meta-commentary.** Signposting, self-narration, and permission-granting go; enter the point directly.

11. **No typographic crutches.** Replace an em dash with a comma, a period, or parentheses, never with a colon, an ellipsis, or a contorted sentence. Bold, caps, emoji, and markup don't do the work the sentence should do. See [structures.md](structures.md).

12. **Don't answer your own rhetorical questions.** "The result? Faster builds." becomes "Builds got faster."

13. **Trust readers.** Say the fact plainly, without softening it, justifying it in advance, or telling readers how much weight to give it. See [phrases.md](phrases.md).

14. **Cut quotables.** A pull-quote, an aphorism template, or a stock metaphor becomes a working sentence with the specific claim.

15. **Vary everything that repeats.** That covers sentence lengths, openers, paragraph endings, item counts in lists, and the paragraph mold. The counterweight: the thing under discussion keeps its name, since rotating synonyms for one referent makes the reader count several. See [structures.md](structures.md).

16. **Follow US conventions.** Use the serial comma ("A, B, and C"), US spellings ("color," "organize," "toward"), and double quotation marks with commas and periods inside, and keep common nouns lowercase mid-sentence ("our marketing team").

17. **Prefer verbs to nominalizations, and cut wordy connectors.** "Decide" beats "make a decision," "to" beats "in order to," and a real subject beats "There is/There are." See [phrases.md](phrases.md).

18. **Don't over-bullet.** Keep bullet lists for parallel items (steps, parameters, an inventory); ideas linked by reasoning belong in a connected paragraph.

## Weighing in English

Three kinds of tell count on a single instance, wherever they appear: the em dash, the loud tier of the AI vocabulary in [phrases.md](phrases.md), and unmistakable model residue, meaning self-reference as an AI ("As an AI language model," a knowledge-cutoff disclaimer), a trailing offer ("Want me to expand this?"), process narration pasted with the deliverable ("I've analyzed your requirements"), and a chat sign-off ("I hope this helps"). Convention slips are objective errors fixed even alone: a British spelling in US text, Title Case on a common noun mid-sentence, a hyphen kept on a compound after its noun. Everything else counts only in a cluster, including the borderline vocabulary tier, wordy constructions, email boilerplate, and service formulas ("Feel free to," "Certainly!", "Great question"), which people write too. In a first-person draft, a spoken "just," "honestly," or "actually" is voice: thin a cluster and keep the one that sounds like the writer.

## Quick checks

Run each group before delivering. The list binds like the core rules, since it also covers tells without a numbered rule.

### Fidelity to the source

- Number, cause, contrast, actor, or example that the source doesn't contain, including a "but" or "so" laid between two facts it only set side by side? Remove it, or flag the gap to the author.
- Text noticeably longer than the original, or a claim shifted by the rewrite? Tighten and restore.
- Specific detail smoothed into a generic claim ("cut review time from thirty minutes to eight" turned into "improved productivity")? Restore the number or the name.
- Gap filled with a guess ("likely grew up in," "appears to have been founded in the 1990s") or a knowledge disclaimer ("details are limited," "based on available information")? Cut the guess and the disclaimer, and flag the gap to the author.
- Unnamed authority ("experts agree," "observers note," "industry reports") or a list of outlets propping up a claim? Use the source the text names and what it said; otherwise cut.

### Flow and rhythm

- Three consecutive short fragments, or every sentence under ten words? Rebuild into flowing sentences.
- Same conjunction at every seam, or no sentence left standing alone across a paragraph? Vary the connective and the length.
- Sentence contorted to dodge an em dash, or a bolted-on "lol," lowercase "i," or fake typo? That's the over-corrected tell; write the plain sentence.
- Three consecutive sentences of matching length? Break one.
- Triad cadence everywhere ("clear, concise, and compelling")? Vary item counts; two or one often beats three.
- Same word or sentence opener repeated at close range? Vary.
- One-sentence paragraph restating the paragraph before it, or the same closer after several sections? Cut the repeat.
- Every paragraph built on the same mold (topic sentence, explanation, example, transition), or all of the same length? Open one on a fact and another on a consequence, let one run short, and cut the transition where the next paragraph follows on its own.

### Wording

- Empty intensifier ("very," "really," "truly," "incredibly," "deeply," "extremely")? Cut. Meaningful adverb ("slowly," "twice")? Keep.
- Nominalizations ("make a decision," "conduct an analysis") or wordy connectors ("in order to," "due to the fact that," "prior to") piling up? Use the verb and the short word.
- Hedges stacked ("arguably," "in many ways," "to some extent" in one paragraph)? Keep at most one.
- Both-sides menu ("on one hand... on the other," "it depends") dodging a stance? Take a position, then name the trade-off.
- Loud-tier AI vocabulary ("delve," "leverage," "seamless," "tapestry," "unlock," "harness," "empower")? Replace with the plain word on sight.
- Borderline-tier word clustering ("robust," "comprehensive," "navigate," "utilize," "ensure," "key" several times in one passage)? Thin the cluster; leave a lone instance alone.
- Redefinition verb ("reimagine," "reinvent," "revolutionize," "transform" with nothing named)? Name what changes, or leave it to the author.
- Pleonasm ("advance planning," "end result," "collaborate together," "each and every")? Cut the redundant half.
- Copula dodge ("serves as," "functions as," "boasts") standing in for "is" or "has"? Use the short verb; keep a verb that states an accurate relation ("the API offers a sync mode").
- "Moreover," "Furthermore," "Additionally" opening sentences? At most one connector opener per paragraph; usually just start the sentence.
- One referent under rotating names ("the agent," "the assistant," "the tool")? Keep the clear word and repeat it, or restructure so it comes up less often.

### Actors and voice

- "There is/There are" opening a sentence? Rewrite around a real subject.
- "It is essential/important to..." with no actor? Name who must act.
- Passive hiding a known actor? Name them up front.
- Inanimate thing doing a human verb ("the decision emerged"), or given a mind ("the dashboard understands," "the roadmap wants to")? Name the person the text points to, or say what the thing does; if it points to no one, keep the impersonal form.

### Formulaic structures

- "Not X. But Y." or "isn't just X; it's Y," including the contrast split across sentences ("This doesn't mean X. It means Y.") and the clipped negative tail (", no guessing")? State Y.
- Objection nobody raised ("I'm not saying," "To be clear," "Don't get me wrong," "One might be tempted to")? Cut the defense; keep an objection only when the text attributes it or a reader would weigh it.
- "Less X, more Y" or "Think X, not Y" see-saw? Write the full sentence.
- Negative listing ("It's not A. It's not B. It's C.")? State C.
- Rhetorical question answered immediately ("The catch? ..."), or its colon twin ("The best part: it learns.")? State it in a plain sentence.
- Pseudo-cleft opener ("What makes this hard is...")? Name the thing: "The constraint is..."
- Learned litotes ("not without merit," "it is not uncommon for," "cannot be ignored")? Affirm: "useful," "often," "matters."
- Participial consequence tail (", ensuring...," ", making it...," ", allowing you to...")? End the sentence; give the consequence its own sentence and actor, or cut it.

### Openers, closers, and boilerplate

- Throat-clearing or fake-relatability opener ("Here's the thing," "Look, I get it," or an opening "Honestly," in neutral or professional prose), or a credentials opener ("As a developer, I can tell you")? Cut to the point.
- Faux-insight setup ("What nobody tells you," "What most people get wrong")? Cut the setup; the claim stands on its own.
- Marketing opener ("In a world where," "In today's fast-paced," "Whether you're X or Y") or false range ("from X to Y, and everything in between")? Cut, or name the actual audience and what the text covers.
- Cliché closer ("In conclusion," "At the end of the day," "Only time will tell"), or a kicker line turning the point into a metaphor or an aphorism? Delete it rather than polish it, and end on the last concrete sentence.
- Email boilerplate ("I hope this email finds you well," "I wanted to reach out," "Please don't hesitate to") stacking up? Open with the reason you're writing; close with the concrete next step.
- Model residue (self-reference as an AI, a trailing "Want me to..." offer, process narration such as "I've analyzed your requirements," a chat sign-off such as "I hope this helps")? Delete it, even once. Service formulas ("Great question," "Certainly!", "Feel free to") opening or closing by reflex? Thin them.

### Substance

- Vague declarative ("The implications are significant")? Name the specific implication from the source, or cut the sentence; don't make one up.
- Paragraph that restates the prompt or could be cut with nothing lost? Make a real claim or delete it.
- Sentence that could move unchanged to another company, product, or person? Cut it, or tie it to this subject with a fact the source gives.
- Reader guidance ("As you can see," "This distinction matters," a redundant "in other words")? Cut the label; add the support if the point isn't clear.
- Vague connection ("associated with," "linked to")? Name the relationship the source gives; if it gives none, keep the vague word rather than invent a role.
- Inflated significance ("marking a pivotal moment," "plays a key role," "setting the stage for"), or a stock "despite these challenges, X continues to thrive" paragraph? Keep the fact, drop the significance.
- Pull-quote sentence, aphorism template ("X is the currency of Y," "X becomes a trap"), or stock metaphor ("a double-edged sword," "move the needle")? Rewrite as a working sentence with the trade-off, the fix, or the gain.
- Documentation describing what the current text replaced ("added to replace the old loop")? Describe the current behavior; history belongs in changelogs and migration guides.

### Typography, format, and conventions

- Em dash? Comma, period, or parentheses.
- Bold emphasis, ALL CAPS, scare quotes around an ordinary word, or emoji in prose? Remove; rewrite if the word needs weight.
- Bold-label lead-in ("**Speed:** ..."), `---` divider, or emoji or arrow (→) as a bullet or heading? Drop the label, use paragraph breaks, use plain markers.
- Markdown (asterisks, hashes, list dashes) in a channel that won't render it (a plain-text email, a text message, a chat reply)? Write the sentence without markup.
- Heading restated by its first sentence, a top-level heading repeating the document title, or a heading over a one- or two-sentence section? Cut the repeat; merge the short section into its neighbor.
- Hyphen kept on a compound after its noun ("the report is high-quality")? Hyphenate before the noun only.
- Semicolon where a period flows better? Replace. Keep it only to balance two related clauses.
- Colon that only announces ("Here's the key insight:")? Cut the announcement.
- Exclamation mark of enthusiasm ("Exciting news!", "Let's go!")? Keep the exclamation for a sentence that exclaims.
- Bullet list carrying an argument? Convert to a connected paragraph; keep bullets for parallel items.
- Listicle headline ("7 ways to," "5 signs that") or a fixed intro/three-body/"in summary" skeleton? Let the shape follow the argument.
- Missing serial comma, British spelling, or Title Case on a common noun? Fix to US convention.

## Tells that survive a rewrite

Search your own output for these first during the final read: an invented "but" or "so" between two facts, a not-X-but-Y contrast, a one-line closer, an em dash, a triad, a bold label.
