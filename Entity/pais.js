const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Pais = sequelize.define(
  "Pais",
  {
    codigoPais: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,  // Agrega esta propiedad para que se genere automáticamente
    },
    nombrePais: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    capitalPais: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    poblacion: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    latitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    longitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "Pais",
    timestamps: false,
  }
);

module.exports = Pais;
