const db = require('../config/db');

const Usuarios = {
    getAll: (callback) => {
        db.query('SELECT * FROM usuarios', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
    },

    create: ({ nombre, correo, contraseña }, callback) => {
        db.query(
            'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)',
            [nombre, correo, contraseña],
            callback
        );
    },

    login: ({ correo, contraseña }, callback) => {
        db.query(
            'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?',
            [correo, contraseña],
            callback
        );
    }
};

module.exports = Usuarios;
