const db = require('../config/db');

const Autores = {
    getAll: (callback) => {
        db.query('SELECT * FROM autores', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM autores WHERE id_autor = ?', [id], callback);
    },
    create: (autor, callback) => {
        const {nombre_autor, segundo_nombre_autor, apellido_autor, segundo_apellido_autor} = autor;
        const sql = 'INSERT INTO autores (nombre_autor, segundo_nombre_autor, apellido_autor, segundo_apellido_autor) VALUES (?, ?, ?, ?)'
        db.query(sql, [nombre_autor, segundo_nombre_autor, apellido_autor, segundo_apellido_autor], callback);
    }
};

module.exports = Autores;
