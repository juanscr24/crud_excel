const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros.controller');

router.get('/', librosController.getLibros);
router.post('/', librosController.createLibro);

module.exports = router;
