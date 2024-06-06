const router = require("express").Router(); //importar el router de express

const {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/Movie.controller"); //traernos los controladores

//rutas con paramateros y controladores con su método HTTP
router.get("/", getAllMovies);
router.get("/:id", getMovie);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
module.exports = router; //exportar el router
