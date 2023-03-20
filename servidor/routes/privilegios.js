
//Rutas para usuario
const express = require('express');
const router = express.Router();
const privilegiosController = require('../controllers/privilegiosController')

router.get('/', privilegiosController.obtenerPrivilegios)

module.exports = router