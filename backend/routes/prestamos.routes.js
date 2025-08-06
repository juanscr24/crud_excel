const express = require('express');
const router = express.Router();
const prestamosCtrl = require('../controllers/prestamos.controller');

router.get('/', prestamosCtrl.getAllPrestamos);
router.get('/:id', prestamosCtrl.getPrestamoById);
router.post('/', prestamosCtrl.createPrestamo);

module.exports = router;
