// 1️⃣ PUT

// Sert à remplacer complètement une ressource existante.

// Tu envoies tous les champs, pas seulement ceux à changer.

// Si tu oublies un champ, il peut être écrasé ou supprimé.
// PUT /api/users/4
// Body:
// {
//   "name": "phanuel",
//   "price": "30"
// }
// Si l’utilisateur avait un autre champ role: "admin" et que tu ne l’inclus pas dans le PUT → role peut disparaître.

// L’idée : “remplace toute la ressource par ceci”.
// 2️⃣ PATCH

// Sert à mettre à jour partiellement une ressource.

// Tu n’as besoin d’envoyer que les champs que tu veux modifier.

// Les autres champs restent intacts.

// Exemple :
// PATCH /api/users/4
// Body:
// {
//   "price": "35"
// }
// | Méthode | Usage                  | Champs requis            | Effet                               |
// | ------- | ---------------------- | ------------------------ | ----------------------------------- |
// | PUT     | Remplacer tout         | Tous                     | Ressource entièrement remplacée     |
// | PATCH   | Modifier partiellement | Seulement ceux à changer | Les autres champs restent inchangés |

// Règle pratique :

// Si tu veux un CRUD classique et que tes clients n’envoient pas tous les champs → PATCH est souvent plus sûr.

// PUT = tu assures que le client envoie tout le modèle complet.
// https://chatgpt.com/c/68bfeb1a-0288-8330-b852-635e13e2f852