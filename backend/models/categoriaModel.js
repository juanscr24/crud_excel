const db = require('../config/db');

const Categoria = {
    getAll: (callback) => {
        db.query('SELECT * FROM categorias', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM categorias WHERE id_categoria = ?', [id], callback);
    },
    create: (nombre, callback) => {
        db.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre], callback);
    },
    update: (id, nombre, callback) => {
        db.query('UPDATE categorias SET nombre = ? WHERE id_categoria = ?', [nombre, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM categorias WHERE id_categoria = ?', [id], callback);
    }
};

module.exports = Categoria;
