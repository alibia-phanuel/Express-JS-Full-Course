// // const MorkUsers = [
// //   { id: 1, name: "montre", price: "100" },
// //   { id: 2, name: "pc gamer", price: "1200" },
// //   { id: 3, name: "smartphone", price: "500" },
// // ];

// app.get("/api/users", (req, res) => {
//   let { filter, value } = req.query;

//   // Si aucun filtre ou valeur → on renvoie tout
//   if (!filter || !value) {
//     return res.status(200).json(MorkUsers);
//   }

//   // Vérifie si "filter" correspond à un vrai champ
//   if (!Object.prototype.hasOwnProperty.call(MorkUsers[0], filter)) {
//     // 👉 Si ce n’est PAS un champ, on suppose que tu veux chercher dans "name"
//     return res
//       .status(200)
//       .json(
//         MorkUsers.filter(
//           (user) =>
//             user.name.toLowerCase().includes(filter.toLowerCase()) &&
//             user.name.toLowerCase().includes(value.toLowerCase())
//         )
//       );
//   }

//   // Cas normal → on filtre sur le champ demandé
//   const results = MorkUsers.filter((user) => {
//     const field = user[filter];

//     if (typeof field === "string") {
//       return field.toLowerCase().includes(String(value).toLowerCase());
//     }

//     if (Array.isArray(field)) {
//       return field.includes(value);
//     }

//     if (typeof field === "number") {
//       return field === Number(value);
//     }

//     return false;
//   });

//   return res.status(200).json(results);
// });
