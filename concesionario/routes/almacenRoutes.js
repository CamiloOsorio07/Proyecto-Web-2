const express = require('express');
const router = express.Router();
const almacenController = require('../controllers/almacenController');

router.get('/almacenes', almacenController.getAlmacenes);
router.get('/almacenes/:id', almacenController.getAlmacenById);
router.post('/almacenes', almacenController.createAlmacen);

module.exports = router;
