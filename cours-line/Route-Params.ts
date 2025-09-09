// const MorkUsers = [
//   { id: 1, name: "montre", price: "100" },
//   { id: 2, name: "pc gamer", price: "1200" },
//   { id: 3, name: "smartphone", price: "500" },
// ];

// app.get("/api/users/:id", (req, res) => {
//   console.log(req.params.id);
//   const parametrid = parseInt(req.params.id);
//   console.log(parametrid);
//   if (isNaN(parametrid)) return res.status(400).send("invalid id");
//   const findUser = MorkUsers.find((user) => user.id === parametrid);
//   if (!findUser) return res.status(404).send("user not found");
//   return res.status(201).send(findUser);
// });
