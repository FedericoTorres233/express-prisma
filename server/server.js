const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5500",
    methods: ["GET", "PUT"]
  })
);

app.get("/", async (req, res) => {
  res.json({ pepe: "hola" });
});

app.put("/createuser", async (req, res) => {
  console.log(req.body)
  if (req.body != undefined) {
    const { username, password } = req.body;
    const result = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    res.json(result);
  } else {
    res.json("no se pudo :(");
  }
});

app.listen(3000, () => console.log("Server ready"));
