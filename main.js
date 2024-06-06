const { checkConnection, sequelize, syncModels } = require("./db/db.js"); //importar las funciones que nos conectan a la DB
const User = require("./api/models/user.model"); //importar el modelo del usuario
const Movie = require("./api/models/movie.model"); //importar el modelo de la peli
const express = require("express"); //importar express
const morgan = require("morgan"); //importar morgan
const port = 3000; //puerto que estara en uso

const checkAndSync = async () => {
  //comprobar la conexion y sincronizar los modelos
  await checkConnection(); //comprobar conexion
  await syncModels(); //sincronizacion de los modelos
};

const initializeAndListen = () => {
  //Configurar express y ponerlo a escuchar en el puerto definido
  express()
    .use(morgan("dev")) //Configurar morgan para la info de las peticiones
    .use(express.json()) //Transformar los datos a JSON con express
    .use("/api", require("./api/router/index.js")) //Usar el router principal
    .listen(port, () => {
      console.log(`Listening at port: ${port}`); //Y levantar el servidor en el puerto definido
    });
};

const startAPI = async () => {
  await checkAndSync(); //llamada a la funcion que maneja la conexion a la base de datos
  initializeAndListen(); //llamada a la funcion que configura expres y levanta el servidor
};

startAPI(); //Iniciamos la API
