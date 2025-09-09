// import express from "express";

// // 🔥 Obligatoire pour pouvoir lire req.body en JSON
// app.use(express.json());

// const MorkUsers = [
//   { id: 1, name: "montre", price: "100" },
//   { id: 2, name: "pc gamer", price: "1200" },
//   { id: 3, name: "smartphone", price: "500" },
// ];

// // POST (création)
// app.post("/api/users", (req, res) => {
//   console.log(req.body); // vérifie ce que tu envoies

//   const newUser = { id: MorkUsers.length + 1, ...req.body };
//   MorkUsers.push(newUser);

//   return res.status(201).json({
//     message: "user created",
//     user: newUser,
//   });
// });
