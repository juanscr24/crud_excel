const Libro = require('../models/librosModel');

exports.getLibros = (req, res) => {
    Libro.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener libros' });
        } else {
            res.json(results);
        }
    });
};

exports.createLibro = (req, res) => {
    Libro.create(req.body, (err, result) => {
        if (err) {
            console.error(err); // Usamos 'err', no 'error'
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: result.insertId, ...req.body });
        }
    });
};
