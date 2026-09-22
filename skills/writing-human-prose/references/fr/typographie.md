# Typographie et ponctuation françaises

Détail des règles 13, 14 et 20 de rules.md, et de la ponctuation des listes de la règle 17.

Sommaire, une section par famille, à retrouver par son titre :

- Ponctuation et mise en forme à manier avec précaution
- Balisage dans un canal qui ne rend pas le _markdown_
- Énumérations sans virgule d'Oxford
- Espaces insécables
- Majuscules accentuées
- Casse de phrase, pas casse de titre
- Titres formulaïques à deux-points
- Sigles et acronymes
- Ponctuation des listes verticales
- Nombres et unités
- Dates et ordinaux

## Ponctuation et mise en forme à manier avec précaution

- **Tiret cadratin (—).** L'IA l'utilise comme virgule ou comme deux-points à l'anglo-saxonne. Préfère les virgules (« Pierre, qui sait, est venu »), un point ou des parenthèses, sans mettre à sa place un deux-points, des points de suspension ou une phrase tordue.
- **Deux-points (`:`).** Il est légitime devant une liste ou une vraie explication, mais l'IA en abuse pour présenter, annoncer ou définir. Coupe l'annonce creuse en reformulant par une virgule, un point ou une subordonnée.
- **Point-virgule (`;`).** Il a deux emplois légitimes, équilibrer deux propositions indépendantes mais liées (« Pierre travaille ; Marie se repose ») et séparer les items d'une liste verticale ou d'une énumération déjà chargée de virgules. Ailleurs, l'IA le place par réflexe là où la prose française attend la virgule pour articuler et le point pour clore, alors coupe par un point ou relie par une subordonnée.
- **Point d'exclamation (`!`).** L'IA le sème pour vendre son enthousiasme (« C'est parti ! », « Bonne nouvelle ! »). Réserve-le aux vraies exclamations, rares en registre soutenu.
- **Barre oblique (`/`).** Ce calque anglais (« et/ou », « FR/EN », « lecture/écriture ») devient « ou », « et » ou une reformulation, et la barre ne reste que dans les chemins de fichiers, les URL et autres usages syntaxiques.
- **Guillemets français « ».** Remplace les guillemets droits d'une citation par les guillemets français, en source _markdown_ comme dans un rendu soigné, et réserve les droits aux chaînes techniques et au code. L'espace intérieure est traitée sous « Espaces insécables ».
- **Apostrophe typographique (’).** Le rendu soigné attend l'apostrophe courbe plutôt que l'apostrophe droite (') du clavier, que la source _markdown_ peut garder.
- **Points de suspension.** Coupe ceux qui ferment une phrase pour l'effet, et compose les autres en un caractère (…, U+2026) plutôt qu'en trois points tapés.
- **Italiques d'emphase.** Si le mot doit ressortir, change la phrase.
- **Gras d'emphase.** Réserve le gras aux intitulés et aux termes que le lecteur doit retrouver d'un coup d'œil, et change la phrase plutôt que de scander un mot en gras. Le paragraphe mué en intitulés en gras suivis d'un deux-points (« **Productivité :** trois leviers… ») est un faux plan, à reconvertir en prose articulée dès que les items s'enchaînent par une logique.
- **Émojis et pictogrammes.** En prose soutenue, remplace les coches, fusées et ampoules par le mot qui porte le sens.
- **Flèches et filets.** La flèche (→) en guise de connecteur ou de puce, le filet horizontal entre chaque section et le titre de premier niveau qui répète le titre du document décorent sans informer. Remplace la flèche par le mot (« donne », « puis »), retire les filets et laisse le titre paraître une fois.
- **Titre redit.** Supprime le paragraphe d'une ligne qui reformule le titre qu'il suit (« ## Performance », puis « La vitesse compte. »).
- **Titre sur deux phrases.** Fonds la section de deux phrases dans sa voisine et garde les titres pour les sections qui en ont la taille.
- **Majuscule après le deux-points.** En cours de phrase, ce qui suit un deux-points commence par une minuscule (« Le résultat : une équipe plus rapide »), la capitale étant réservée au nom propre et à la citation complète.

## Balisage dans un canal qui ne rend pas le _markdown_

Un courriel en texte brut, un SMS, une messagerie ou un champ de formulaire affichent tels quels les astérisques, les dièses et les tirets, qui y signent la machine.

| Au lieu du balisage | Écris |
| --- | --- |
| Titre en dièses ouvrant un bloc | La phrase qui dit ce que le bloc contient |
| Intitulé en gras suivi d'un deux-points | La phrase articulée, ou une ligne isolée sans balisage |
| Liste en astérisques ou en tirets | L'énumération dans la phrase, ou une liste ponctuée à la française |

Vérifie le canal avant de poser un titre, un gras ou une puce.

## Énumérations sans virgule d'Oxford

En français, la conjonction « et » ou « ou » remplace la dernière virgule d'une énumération.

| À éviter | Correct |
| --- | --- |
| A, B, et C | A, B et C |
| pommes, poires, et oranges | pommes, poires et oranges |
| rouge, blanc, ou bleu | rouge, blanc ou bleu |

Lorsque la dernière entrée contient elle-même une conjonction, une virgule peut lever l'ambiguïté (« Pierre, Paul, et Jacques et Marie »).

## Espaces insécables

Le français impose une espace insécable avant les ponctuations doubles et à l'intérieur des guillemets, en deux largeurs, la fine (U+202F) et la normale (U+00A0), large d'un mot. Une espace ordinaire (U+0020) à leur place laisse le signe partir seul à la ligne, si bien qu'elle se corrige, en source _markdown_ comme ailleurs.

| Signe | Espace requise |
| --- | --- |
| `:` | normale avant |
| `?`, `!`, `;`, `%` | fine avant |
| `«` et `»` | fine après `«` et avant `»`, ou normale au choix de l'auteur |

Dans les guillemets, la fine est le défaut de ce _skill_, mais la normale est aussi correcte, puisque le _Lexique des règles typographiques en usage à l'Imprimerie nationale_ la prescrit. Ne convertis pas le choix qu'un auteur tient d'un bout à l'autre, et corrige seulement l'espace ordinaire ou le mélange des deux largeurs dans un même texte.

## Majuscules accentuées

Les majuscules portent leurs accents en français (« État », « À propos », « Œuvre »), et l'IA les omet souvent.

| À éviter | Correct |
| --- | --- |
| Etat | État |
| A propos | À propos |
| Elève | Élève |
| Ile | Île |
| Egalité | Égalité |
| Ecole | École |

## Casse de phrase, pas casse de titre

Le français écrit les titres en casse de phrase, où seuls la première lettre et les noms propres prennent une capitale.

| À éviter | Correct |
| --- | --- |
| Les Grandes Tendances de l'Année | Les grandes tendances de l'année |
| Guide Complet de la Sécurité | Guide complet de la sécurité |

Ne capitalise pas non plus les noms communs en cours de phrase par déférence anglo-saxonne (« l'Intelligence Artificielle », « notre Entreprise », « le Client »). Ils s'écrivent en minuscules, sauf quand ils désignent une entité propre nommée.

## Titres formulaïques à deux-points

Le titre en deux volets séparés par un deux-points (« X : le guide complet », « Télétravail : pourquoi tout change ») est une signature des titres web que ce _skill_ écarte. Reforme un titre plein (« Le guide complet de X », « Pourquoi le télétravail change tout »), et réserve le deux-points de titre au vrai sous-titre d'ouvrage ou à la numérotation d'une collection.

## Sigles et acronymes

Un sigle s'épelle lettre à lettre et garde toutes ses capitales, sans points (SNCF, TGV, RATP, PDG). Un acronyme se lit comme un mot ordinaire, et l'usage hésite sur sa casse, certains guides gardant toutes les capitales (OTAN, UNESCO) là où d'autres ne gardent que l'initiale (Otan, Unesco). Garde la graphie de l'auteur, prends l'initiale seule dans un texte que tu écris, et ne corrige que le mélange des deux dans un même texte. L'acronyme devenu nom commun passe en minuscules (laser, radar, sida, ovni).

| Exemple | Lecture | Casse |
| --- | --- | --- |
| SNCF, TGV, RATP, PDG | épelée, lettre à lettre | toutes capitales |
| Otan ou OTAN, Unesco ou UNESCO | comme un mot, terme propre | initiale ou toutes capitales, une seule graphie par texte |
| laser, radar, sida | comme un mot, nom commun | minuscules |

## Ponctuation des listes verticales

Une liste verticale s'introduit par un deux-points, et chaque item commence par une minuscule et se termine par un point-virgule, sauf le dernier, qui se clôt par un point. Réserve la majuscule initiale et le point final par item aux listes de phrases complètes.

## Nombres et unités

| À éviter | Correct |
| --- | --- |
| 3.14 | 3,14 |
| 1,000,000 | 1 000 000 |
| 25°C | 25 °C |
| 14h30 | 14 h 30 |
| 10km | 10 km |

La virgule sert de séparateur décimal et une espace insécable sépare les milliers, sauf dans les années (2026), les numéros de page, les codes postaux et les numérotations (article 1240), qui s'écrivent d'un bloc. Toute unité prend une insécable normale avant son symbole, sauf le pourcentage qui prend la fine, et l'heure en prend une de chaque côté du « h ».

## Dates et ordinaux

Les mois et les jours s'écrivent en minuscules, leur capitale étant un calque de l'anglais, tandis que les ordinaux s'abrègent en « 1er », « 1re » et « 2e », jamais en « ème ». Les siècles se composent en chiffres romains suivis de la même abréviation (« XXIe siècle »).

| À éviter | Correct |
| --- | --- |
| le 5 Juillet 2026 | le 5 juillet 2026 |
| Lundi prochain, en cours de phrase | lundi prochain |
| 2ème, 3ème | 2e, 3e |
| 1ère | 1re |
| XXIème siècle | XXIe siècle |
