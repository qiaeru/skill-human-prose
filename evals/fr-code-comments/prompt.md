---
tags: [interface]
max_turns: 10
allowed_tools: [Read, Glob, Grep, Skill, Write]
---

Relis le français de ce fichier et écris la version corrigée dans `upload.js`, sans toucher au code.

```js
/**
 * Module d'envoi : il gère le téléversement des fichiers vers le serveur.
 * Pourquoi un module à part ? Parce que l'envoi doit pouvoir reprendre après une coupure.
 */

// Attention : la taille maximale est fixée côté serveur ; ne la duplique pas ici.
const MAX_RETRIES = 3;

// Le libellé « Envoi terminé » s'affiche dans la barre de progression.
export function progressLabel(percent) {
  if (percent >= 100) {
    return "Envoi terminé !";
  }
  return `Envoi en cours, ${percent}% effectués`;
}
```
