const router = require("express").Router(); //importar el router de express

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller"); //traernos los controladores

//rutas con paramateros y controladores con su método HTTP
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router; //exportar el router
