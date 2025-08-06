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
    const { nombre, correo, contraseña } = req.body;
    Usuarios.create({ nombre, correo, contraseña }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, nombre, correo });
    });
};

// Login
exports.loginUsuario = (req, res) => {
    const { correo, contraseña } = req.body;
    Usuarios.login({ correo, contraseña }, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ message: 'Credenciales inválidas' });
        res.json({ message: 'Login exitoso', user: results[0] });
    });
};
