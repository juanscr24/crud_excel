const db = require('../config/db');

const Usuarios = {
    getAll: (callback) => {
        db.query('SELECT * FROM usuarios', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id], callback);
    },

    create: (usuario, callback) => {
        const {nombre, segundo_nombre, apellido, segundo_apellido, no_identidad, correo, telefono} = usuario
        const sql = 'INSERT INTO usuarios (nombre, segundo_nombre, apellido, segundo_apellido, no_identidad, correo, telefono) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query( sql, [nombre, segundo_nombre, apellido, segundo_apellido, no_identidad, correo, telefono],callback);
    },
};

module.exports = Usuarios;
