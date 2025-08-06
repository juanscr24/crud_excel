const Categoria = require('../models/categoriaModel');

exports.getAll = (req, res) => {
    Categoria.getAll((err, data) => {
        if (err) return res.status(500).json({ error: err });
        res.json(data);
    });
};

exports.getById = (req, res) => {
    const id = req.params.id;
    Categoria.getById(id, (err, data) => {
        if (err) return res.status(500).json({ error: err });
        if (data.length === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.json(data[0]);
    });
};

exports.create = (req, res) => {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: 'El nombre es obligatorio' });

    Categoria.create(nombre, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Categoría creada', id: result.insertId });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: 'El nombre es obligatorio' });

    Categoria.update(id, nombre, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Categoría actualizada' });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Categoria.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Categoría eliminada' });
    });
};
