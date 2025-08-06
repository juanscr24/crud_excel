const Autores = require('../models/autoresModel');

exports.getAllAutores = (req, res) => {
    Autores.getAll((err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener autores' });
        res.json(results);
    });
};

exports.getAutoresById = (req, res) => {
    const { id } = req.params;
    Autores.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Autor no encontrado' });
        res.json(results[0]);
    });
};

exports.createAutor = (req, res) => {
    const { nombre_autor, segundo_nombre_autor, apellido_autor, segundo_apellido_autor } = req.body;
    Autores.create({ nombre_autor, segundo_nombre_autor, apellido_autor, segundo_apellido_autor }, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al crear autor' });
        res.status(201).json({ message: 'Autor creado con éxito' });
    });
};
