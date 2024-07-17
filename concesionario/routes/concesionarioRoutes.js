const express = require('express');
const router = express.Router();
const concesionarioController = require('../controllers/concesionarioController');

router.get('/concesionarios', concesionarioController.getConcesionarios);
router.get('/concesionarios/:id', concesionarioController.getConcesionarioById);
router.post('/concesionarios', concesionarioController.createConcesionario);

module.exports = router;
