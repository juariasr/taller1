const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    nombre: "Andres",
  });
});

module.exports = app;
