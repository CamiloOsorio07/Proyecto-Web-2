const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.get('/empleados', empleadoController.getEmpleados);
router.get('/empleados/:id', empleadoController.getEmpleadoById);
router.post('/empleados', empleadoController.createEmpleado);

module.exports = router;
