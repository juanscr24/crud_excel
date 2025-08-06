const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuarios.controller');

router.get('/', usuarioCtrl.getAllUsuarios);
router.get('/:id', usuarioCtrl.getUsuarioById);
router.post('/', usuarioCtrl.createUsuario);

module.exports = router;
