//Rutas para usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

//Api/usuarios
router.post('/',usuarioController.crearUsuario);
router.get('/', usuarioController.leerUsuario),
router.put('/:id', usuarioController.actualizarUsuario),
router.get('/:id', usuarioController.leerUsuarioID),
router.delete('/:id', usuarioController.eliminarUsuario),

module.exports = router;