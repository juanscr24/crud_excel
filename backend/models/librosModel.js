const db = require('../config/db');

const Libros = {
    getAll : (callback) => {
        db.query('SELECT * FROM libros', callback);
    },
    
    create: (libro, callback) => {
    const { isbn, titulo, id_autor, id_categoria, anio_publicacion } = libro;
    const sql = 'INSERT INTO libros (isbn, titulo, id_autor, id_categoria, anio_publicacion) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [isbn, titulo, id_autor, id_categoria, anio_publicacion], callback);
    }
};

module.exports = Libros;
