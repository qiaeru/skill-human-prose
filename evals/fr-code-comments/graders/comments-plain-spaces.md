---
type: regex
target: last_message
pattern: '\n(?:\s*//| \*)[^\n]*[\u00a0\u202f]'
match: not_contains
---

No comment line of the returned code (a `//` line, or a header line opening on an asterisk) holds a non-breaking space, since a code file takes none outside the strings shown to the user.
