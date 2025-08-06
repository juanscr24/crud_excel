const Usuarios = require('../models/usuariosModel');

// Obtener todos los usuarios
exports.getAllUsuarios = (req, res) => {
    Usuarios.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Obtener usuario por ID
exports.getUsuarioById = (req, res) => {
    const { id } = req.params;
    Usuarios.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(results[0]);
    });
};

// Crear usuario
exports.createUsuario = (req, res) => {
    const { nombre, segundo_nombre, apellido, segundo_apellido, no_identidad, correo, telefono } = req.body;
    Usuarios.create({ nombre, segundo_nombre, apellido, segundo_apellido, no_identidad, correo, telefono }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, nombre, correo });
    });
};

