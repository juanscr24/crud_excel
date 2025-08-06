const db = require('../config/db');

exports.getAllLibros = (callback) => {
    db.query('SELECT * FROM libros', callback);
};

exports.createLibro = (libro, callback) => {
    const { isbn, titulo, id_autor, id_categoria, anio_publicacion } = libro;
    const sql = 'INSERT INTO libros (isbn, titulo, id_autor, id_categoria, anio_publicacion) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [isbn, titulo, id_autor, id_categoria, anio_publicacion], callback);
};

