const { DataTypes } = require("sequelize"); //importar sequelize
const { sequelize } = require("../../db/db"); //importar las funciones que nos conectan a la base de datos

const Movie = sequelize.define(
  "movie",
  {
    //creamos la estructura de la tabla 'Movie'
    //titulo
    title: {
      type: DataTypes.STRING, //tipo de dato en la columna: STRING
      allowNull: false,
    },
    //año
    year: {
      type: DataTypes.INTEGER, //tipo de dato en la columna: STRING
    },
    //duracion
    duration: {
      type: DataTypes.STRING,
    },
    //director
    director: {
      type: DataTypes.DECIMAL,
    },
    //rate
    rate: {
      type: DataTypes.STRING,
    },
    //momento en el que se crea
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false } //no creamos el campo updateAt
);

module.exports = Movie; //exportar el modelo para usarlo en el controlador
