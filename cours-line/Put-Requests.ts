// PUT****************
// Sert à remplacer complètement une ressource existante.
// Tu envoies tous les champs, pas seulement ceux à changer.
// Si tu oublies un champ, il peut être écrasé ou supprimé.
// *******************
// const MorkUsers = [
//   { id: 1, name: "montre", price: "100" },
//   { id: 2, name: "pc gamer", price: "1200" },
//   { id: 3, name: "smartphone", price: "500" },
// ];

// app.put("/api/users/:id", (req, res) => {
//   const paramId = parseInt(req.params.id);

//   if (isNaN(paramId)) return res.status(400).json({ error: "Invalid ID" });

//   const index = MorkUsers.findIndex((user) => user.id === paramId);

//   if (index === -1) return res.status(404).json({ error: "User not found" });
//   // Remplace entièrement l'utilisateur par le nouveau body + id inchangé
//   const updatedUser = { id: paramId, ...req.body };
//   MorkUsers[index] = updatedUser;

//   return res.status(200).json({
//     message: "User replaced successfully",
//     user: updatedUser,
//   });
// });
