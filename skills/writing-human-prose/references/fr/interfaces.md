# Interfaces logicielles

Un fichier d'interface (libellés d'application, fichiers de _locales_, chaînes de traduction) mélange deux registres qu'il faut traiter différemment, et la ligne de partage passe entre les unités d'un même fichier. Un fragment court ne relève que des règles lexicales et typographiques et du registre d'assistant, tandis qu'une phrase complète relève de toute la prose. Les numéros renvoient aux règles centrales de rules.md.

## Micro-libellés

Boutons, onglets, étiquettes de champ, titres courts, notifications brèves et messages d'erreur d'une ligne sont des fragments qui échappent aux règles d'architecture de la phrase. Laisse de côté la subordination (1), les participes (2), les relatives (3), les fausses oppositions (8), les connecteurs d'ouverture (9), le méta-commentaire (12), les listes (17), l'inversion interrogative (19), l'objection fantôme (22), la mise en scène (23) et la portée gonflée (24). N'y regarde que le lexique, la typographie et le registre : anglicismes (6), faux-amis (15), pièges grammaticaux (16), concret plutôt que vague (11), barre oblique et point d'exclamation (13, « Lecture/écriture » devenant « Lecture et écriture »), italiques (25), registre d'assistant (21) et surtout typographie (14) et casse (20), puisque c'est sur ces fragments que se jouent les insécables, les majuscules accentuées, les pourcentages et la casse. Le registre d'assistant abonde dans les messages courts d'erreur, de confirmation ou d'accueil (« Oups ! », « C'est parti ! », « N'hésitez pas à nous contacter »), où l'exclamation d'enthousiasme et la formule de service se corrigent comme en prose. Un libellé français s'écrit en casse de phrase (« Enregistrer les modifications »), quelle que soit la plateforme, parce que la casse de titre des interfaces anglaises n'existe pas en français, et un fragment ne prend pas de point final. Dans les vérifications rapides, ne déroule que les familles du lexique, de la ponctuation, de la typographie et du registre d'assistant.

## Inversion de la règle 18 sur les micro-libellés

En prose tu varies le lexique, alors qu'en interface une même action garde toujours le même mot. Si « Supprimer » étiquette un bouton, ne l'alterne jamais avec « Effacer » ou « Retirer » ailleurs, parce que l'utilisateur apprend les mots de l'interface et que la cohérence prime sur la variété.

## Textes longs

Dès qu'une chaîne forme une ou plusieurs phrases complètes (description, texte d'aide, corps d'une fenêtre de confirmation, message d'erreur explicatif, introduction), applique le _skill_ entier, subordination et vérifications rapides comprises. Un avertissement de deux phrases ou une description de carte est de la prose et se relit comme telle.
