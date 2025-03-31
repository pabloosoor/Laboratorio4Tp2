const Pais = require("../Entity/pais");

const guardarPais = async (paisData) => {
  return await Pais.create(paisData);
};

const obtenerTodosLosPaises = async () => {
  return await Pais.findAll();
};

module.exports = { guardarPais, obtenerTodosLosPaises };
