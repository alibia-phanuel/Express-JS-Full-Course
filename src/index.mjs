import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
// 🔥 Obligatoire pour pouvoir lire req.body en JSON
app.use(express.json());

const loggingMiddleware = (req, res, next) => {
  console.log(req.method, res.url);
  next();
};
app.use(loggingMiddleware);
const MorkUsers = [
  { id: 1, name: "montre", price: "100" },
  { id: 2, name: "pc gamer", price: "1200" },
  { id: 3, name: "smartphone", price: "500" },
];
// Route test
app.get("/", (req, res) => res.status(200).send({ message: "Hello World" }));
// GET avec filtrage
app.get("/api/users", (req, res) => {
  let { filter, value } = req.query;

  if (!filter || !value) {
    return res.status(200).json(MorkUsers);
  }

  if (!Object.prototype.hasOwnProperty.call(MorkUsers[0], filter)) {
    // 👉 Si ce n’est pas un champ → recherche dans "name"
    return res
      .status(200)
      .json(
        MorkUsers.filter(
          (user) =>
            user.name.toLowerCase().includes(filter.toLowerCase()) &&
            user.name.toLowerCase().includes(value.toLowerCase())
        )
      );
  }

  const results = MorkUsers.filter((user) => {
    const field = user[filter];

    if (typeof field === "string") {
      return field.toLowerCase().includes(String(value).toLowerCase());
    }
    if (Array.isArray(field)) {
      return field.includes(value);
    }
    if (typeof field === "number") {
      return field === Number(value);
    }
    return false;
  });

  return res.status(200).json(results);
});
// Alias pour récupérer tous les produits
app.get("/api/products", (req, res) => res.status(200).json(MorkUsers));
// GET by ID
app.get("/api/users/:id", (req, res) => {
  const paramId = parseInt(req.params.id);

  if (isNaN(paramId)) return res.status(400).send("invalid id");

  const findUser = MorkUsers.find((user) => user.id === paramId);

  if (!findUser) return res.status(404).send("user not found");

  return res.status(200).json(findUser);
});
// POST (création)
app.post("/api/users", (req, res) => {
  console.log(req.body); // vérifie ce que tu envoies

  const newUser = { id: MorkUsers.length + 1, ...req.body };
  MorkUsers.push(newUser);

  return res.status(201).json({
    message: "user created",
    user: newUser,
  });
});
app.put("/api/users/:id", (req, res) => {
  const paramId = parseInt(req.params.id);

  if (isNaN(paramId)) return res.status(400).json({ error: "Invalid ID" });

  const index = MorkUsers.findIndex((user) => user.id === paramId);

  if (index === -1) return res.status(404).json({ error: "User not found" });

  // Remplace entièrement l'utilisateur par le nouveau body + id inchangé
  const updatedUser = { id: paramId, ...req.body };
  MorkUsers[index] = updatedUser;

  return res.status(200).json({
    message: "User replaced successfully",
    user: updatedUser,
  });
});
app.patch("/api/users/:id", (req, res) => {
  const paramId = parseInt(req.params.id);

  if (isNaN(paramId)) return res.status(400).json({ error: "Invalid ID" });

  const index = MorkUsers.findIndex((user) => user.id === paramId);

  if (index === -1) return res.status(404).json({ error: "User not found" });

  const updatedUser = { ...MorkUsers[index], ...req.body };
  MorkUsers[index] = updatedUser;

  return res.status(200).json({
    message: "User updated successfully",
    user: updatedUser,
  });
});

app.delete("/api/users/:id", (req, res) => {
  const paramId = parseInt(req.params.id);

  if (isNaN(paramId)) return res.status(400).json({ error: "Invalid ID" });

  const index = MorkUsers.findIndex((user) => user.id === paramId);

  if (index === -1) return res.status(404).json({ error: "User not found" });

  MorkUsers.splice(index, 1);

  return res.status(200).json({
    message: "User deleted successfully",
  });
});
// Lancement du serveur
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
