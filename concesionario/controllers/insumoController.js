const pool = require('../db');

const getInsumos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Insumo');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getInsumoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Insumo WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createInsumo = async (req, res) => {
    const { nombre, descripción, precio, almacen_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Insumo (Nombre, Descripción, Precio, Almacen_ID) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, descripción, precio, almacen_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getInsumos,
    getInsumoById,
    createInsumo,
};
