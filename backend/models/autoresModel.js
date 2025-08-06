const db = require('../config/db');

const Autores = {
    getAll: (callback) => {
        db.query('SELECT * FROM autores', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM autores WHERE id_autor = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO autores (nombre_autor) VALUES (?)', [data.nombre_autor], callback);
    }
};

module.exports = Autores;
