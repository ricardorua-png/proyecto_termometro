const express = require("express");
const router = express.Router();
const { db } = require("../database");

// Crear registro (solo sábados)
router.post("/", async (req, res) => {
  const hoy = new Date();

  if (hoy.getDay() !== 3) {
    return res.status(400).json({ mensaje: "Solo se permiten registros los sábados" });
  }

  await db.read();

  const nuevoRegistro = {
    id: Date.now(),
    ...req.body,
    fecha: hoy
  };

  db.data.registros.push(nuevoRegistro);
  await db.write();

  res.status(201).json(nuevoRegistro);
});

// Obtener registros
router.get("/", async (req, res) => {
  await db.read();
  res.json(db.data.registros);
});

module.exports = router;