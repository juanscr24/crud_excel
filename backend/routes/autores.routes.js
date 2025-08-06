const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autores.controller');

router.get('/', autoresController.getAllAutores);
router.get('/:id', autoresController.getAutoresById);
router.post('/', autoresController.createAutor);

module.exports = router;
