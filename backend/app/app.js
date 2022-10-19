const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(`zuppela bella sabella finella ${port}`);
});

app.get("/cdfs", (req, res, next) => {
  res.json(["Gabriel Fróes", "Vanessa Weber"]);
});
