const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculoController');

router.get('/vehiculos', vehiculoController.getVehiculos);
router.get('/vehiculos/:id', vehiculoController.getVehiculoById);
router.post('/vehiculos', vehiculoController.createVehiculo);

module.exports = router;
