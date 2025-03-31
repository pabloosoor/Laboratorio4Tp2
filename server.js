const express = require("express");
const sequelize = require("./config/database");
const paisController = require("./Controller/paisController");

const app = express();
app.use(express.json());
app.use("/api/paises", paisController);
// Middleware para loggear todas las solicitudes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();  // Continúa con el siguiente middleware
});


const PORT = 3000;

const iniciarServidor = async () => {
  try {
    console.log("Iniciando sincronización de la base de datos...");
    await sequelize.sync();
    console.log("✅ Base de datos sincronizada.");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar:", error);
  }
};

iniciarServidor();
