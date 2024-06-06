const router = require("express").Router(); //importar el router de express
const userRouter = require("./user.router"); //importar el router de los usuarios
const movieRouter = require("./movie.router"); //importar el router de las pelis
userRouter.use("/users", userRouter); //asignamos al router principal el de los usuarios al acceder al endpoint /
movieRouter.use("/users", movieRouter); //asignamos al router principal el de las pelis al acceder al endpoint /
module.exports = { userRouter, movieRouter };
