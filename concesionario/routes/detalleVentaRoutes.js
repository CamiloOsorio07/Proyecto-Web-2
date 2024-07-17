const express = require('express');
const router = express.Router();
const detalleVentaController = require('../controllers/detalleVentaController');

router.get('/detalleVentas', detalleVentaController.getDetalleVentas);
router.get('/detalleVentas/:id', detalleVentaController.getDetalleVentaById);
router.post('/detalleVentas', detalleVentaController.createDetalleVenta);

module.exports = router;
