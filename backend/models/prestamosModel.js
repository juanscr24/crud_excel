const db = require('../config/db');

const Prestamo = {
    getAll: (callback) => {
        db.query('SELECT * FROM prestamos', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM prestamos WHERE id_prestamo = ?', [id], callback);
    },

    create: (prestamo, callback) => {
        const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion} = prestamo;
        const sql = 'INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)';
        db.query(sql,[usuario_id, libro_id, fecha_prestamo, fecha_devolucion],callback)
    }
};

module.exports = Prestamo;