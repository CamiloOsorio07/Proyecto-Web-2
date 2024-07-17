const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');

router.get('/insumos', insumoController.getInsumos);
router.get('/insumos/:id', insumoController.getInsumoById);
router.post('/insumos', insumoController.createInsumo);

module.exports = router;
