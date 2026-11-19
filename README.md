# Pharmaco Arcade

Cinq jeux pour réviser les molécules du CC2 de pharmacologie (neurotransmission : sérotonine, GABA / glutamate / glycine, peptides, NO, purines), pensés pour le téléphone.

En ligne : https://benjamin.pajusco.fr/pharmacologie/

| Jeu | Principe |
|---|---|
| Suffix Rush | Les noms tombent, on tape leur classe avant la ligne. |
| L'Alambic | On fabrique une molécule à partir de son affixe, sa cible, son indication et son mécanisme. |
| Arsenal | Cartes à collectionner, brillance liée à la maîtrise, échange entre téléphones par QR code. |
| Les 7 Familles | Contre des bots ou à plusieurs sur un même téléphone. |
| Pharmapolis | Palais mental en 3D : chaque molécule a son bâtiment. |

## Données

- `molecules.js` est généré par `tools/build-molecules.js` à partir de la base d'un site de révision (contenu issu des cours, page source indiquée pour chaque molécule). Les regroupements jouables, affixes repères et images mentales sont ajoutés par le script.
- `progress.js` garde l'XP et la maîtrise dans le navigateur (localStorage), partagées entre les jeux.

Pas d'étape de build : ce sont des pages statiques. Pour tester en local : `python -m http.server` puis http://localhost:8000.
