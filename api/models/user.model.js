const { DataTypes } = require("sequelize"); //importar sequelize
const { sequelize } = require("../../db/db"); //importar las funciones que nos conectan a la base de datos

const User = sequelize.define(
  "user",
  {
    //creamos la estructura de la tabla 'User'
    //nombre
    name: {
      type: DataTypes.STRING, //tipo de dato en la columna: STRING
      allowNull: false,
    },
    //apellido
    lastName: {
      type: DataTypes.STRING, //tipo de dato en la columna: STRING
    },
    //momento en el que se crea
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false } //no creamos el campo updateAt
);

module.exports = User; //exportar el modelo para usarlo en el controlador
