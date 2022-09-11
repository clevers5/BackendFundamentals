const {Router} = require('express');
const AuthController = require('../controllers/auth');
const router = Router();


//Obtener los formularios de login y signup
router.get("/auth/login", AuthController.login);
router.get("/auth/signup", AuthController.signup);

//Recibir información de los formularios de login y signup
router.get("/api/auth/login", AuthController.login);
router.get("/api/auth/signup", AuthController.signup);


module.exports = router