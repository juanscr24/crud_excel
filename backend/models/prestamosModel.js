const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM prestamos', callback);
};

exports.getById = (id, callback) => {
    db.query('SELECT * FROM prestamos WHERE id = ?', [id], callback);
};

exports.create = (data, callback) => {
    const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = data;
    db.query(
        'INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)',
        [usuario_id, libro_id, fecha_prestamo, fecha_devolucion],
        callback
    );
};
