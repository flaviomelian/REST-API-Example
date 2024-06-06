const e = require("express");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("restAPIdb", "flavio", "flavio", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
}); //conexion a la base de datos

//funcion que se encarga de establecer la conexion:
const checkConnection = async () => {
  try {
    await sequelize.authenticate(); //metodo de sequelize que te conecta a la base de datos
    console.log("entro");
  } catch (error) {
    console.error(error);
  }
};

//configuracion para poder crear los modelos:
//manejo de la creacion y actualizacion de los modelos:
const syncModels = async () => {
  try {
    await sequelize.sync(); //actualizamos las tablas con sync de sequelize
  } catch (error) {
    console.error(error);
  }
};

module.exports = { checkConnection, syncModels, sequelize }; //exportamos las funciones
