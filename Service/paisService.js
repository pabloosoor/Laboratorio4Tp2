// paisService.js
const axios = require("axios");
const { guardarPais } = require("../Repository/paisRepository");

const migrarPaises = async () => {
  const url = "https://restcountries.com/v3.1/all";

  try {
    const response = await axios.get(url);
    const paises = response.data;

    for (let i = 0; i < paises.length; i++) {
      const json = paises[i];

      // Validar los datos
      const nombrePais = json.name?.common || "Desconocido";
      const capitalPais = json.capital?.[0] || "No tiene";
      const region = json.region || "No especificado";
      const subregion = json.subregion || "No especificado";
      const poblacion = json.population || 0;
      const latitud = json.latlng?.[0] || 0.0;
      const longitud = json.latlng?.[1] || 0.0;

      const nuevoPais = {
        nombrePais: json.name?.common || "Desconocido",
        capitalPais: json.capital?.[0] || "No tiene",
        region: json.region || "No especificado",
        subregion: json.subregion || "No especificado",
        poblacion: json.population || 0,
        latitud: json.latlng?.[0] || 0.0,
        longitud: json.latlng?.[1] || 0.0,
      };
      

      
      

      // Log para ver los datos antes de guardarlos
      console.log("Guardando país:", nuevoPais);

      // Guardar el país en la base de datos
      await guardarPais(nuevoPais);
      console.log(`✅ Guardado: ${nombrePais}`);
    }

    return "Migración completada";
  }catch (error) {
    console.error("❌ Error al obtener los datos:", error);
    console.error(error.errors);  // Mostrar los detalles de los errores de validación
    return "Error en la migración";
  }
  
};

module.exports = { migrarPaises };
