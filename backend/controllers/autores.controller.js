const Autores = require('../models/autoresModel');

exports.getAllAutores = (req, res) => {
    Autores.getAll((err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener autores' });
        res.json(results);
    });
};

exports.createAutor = (req, res) => {
    const { nombre_autor } = req.body;
    Autores.create({ nombre_autor }, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al crear autor' });
        res.status(201).json({ message: 'Autor creado con éxito' });
    });
};
