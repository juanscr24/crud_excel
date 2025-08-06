const Prestamo = require('../models/prestamosModel');

exports.getAllPrestamos = (req, res) => {
    Prestamo.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getPrestamoById = (req, res) => {
    const { id } = req.params;
    Prestamo.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Préstamo no encontrado' });
        res.json(results[0]);
    });
};

exports.createPrestamo = (req, res) => {
    Prestamo.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...req.body });
    });
};
