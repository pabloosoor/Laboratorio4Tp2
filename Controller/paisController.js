// paisController.js
const express = require("express");
const { migrarPaises } = require("../Service/paisService");  // Correcta importación

const router = express.Router();

router.get("/migrar", async (req, res) => {
  try {
    const resultado = await migrarPaises();
    res.status(200).send(resultado);  // Envía la respuesta con un estado 200
  } catch (error) {
    console.error("Error en migración:", error);
    res.status(500).send("Error al migrar países");  // Responde con un código 500 si hay error
  }
});

module.exports = router;
