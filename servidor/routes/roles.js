//Rutas para usuario
const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController')

//Api/usuarios
router.post('/',rolController.crearRol);
router.get('/', rolController.obtenerRoles),
router.put('/:id', rolController.actualizarRol),
router.get('/:id', rolController.obtenerRolID),
router.delete('/:id', rolController.eliminarRol),

module.exports = router;