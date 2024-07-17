const pool = require('../db');

const getAlmacenes = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Almacén');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAlmacenById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Almacén WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createAlmacen = async (req, res) => {
    const { nombre, ubicación } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Almacén (Nombre, Ubicación) VALUES ($1, $2) RETURNING *',
            [nombre, ubicación]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAlmacenes,
    getAlmacenById,
    createAlmacen,
};
