const Movie = require("../models/user.model"); //Importar el modelo del peli

const getAllMovies = async (request, response) => {
  //Funcion que nos devuelve todas las filas de la tabla pelis
  try {
    let Movies;
    if (request.query && request.query.name) {
      Movies = await Movie.findAll({
        where: {
          name: request.query.name,
        },
      }); //guardamos todos las pelis en una constante con findAll()
    }
    return response.status(200).json(Movies); //devolvemos el codigo de OK y la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); //en caso de error, devolemos el codigo de error y enviamos el mensaje de error
  }
};

const getMovie = async (request, response) => {
  //Funcion que nos devuelve un peli
  try {
    const movie = await movie.findOne({
      where: {
        id: request.params.id, //filtrar por id
      },
    }); //guardamos el peli en una constante con findOne()
    return response.status(200).json(Movies); //devolvemos el codigo de OK y la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); //en caso de error, devolemos el codigo de error y enviamos el mensaje de error
  }
};

const createMovie = async (request, response) => {
  //Funcion que nos crea un peli
  try {
    const movie = await Movie.create(request.body); //guardamos la peli en una constante con create() y le pasamos el body de la request (la info del peli)
    return response.status(200).json(Movie); //devolvemos el codigo de OK y la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); //en caso de error, devolemos el codigo de error y enviamos el mensaje de error
  }
};

const updateMovie = async (request, response) => {
  //Funcion que nos actualiza una peli
  try {
    const movie = await Movie.update(request.body, {
      where: { id: request.params.id },
    }); //guardamos el peli en una constante con update() y le pasamos el body de la request (la info de la peli), usamos su id para filtar el que se quiere actualizar
    return response.status(200).json(Movie); //devolvemos el codigo de OK y la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); //en caso de error, devolemos el codigo de error y enviamos el mensaje de error
  }
};

const deleteMovie = async (request, response) => {
  //Funcion que nos elimina una peli
  try {
    const movie = await Movie.destroy({
      where: { id: request.params.id },
    }); //guardamos el peli en una constante con destroy() y usamos su id para filtar el que se quiere eliminar
    return response
      .status(200)
      .send(`Movie with id: ${request.params.id} deleted`); //devolvemos el codigo de OK y la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); //en caso de error, devolemos el codigo de error y enviamos el mensaje de error
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
}; //exportamos el CRUD
