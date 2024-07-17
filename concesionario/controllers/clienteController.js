const pool = require('../db');

const getClientes = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Cliente');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Cliente WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createCliente = async (req, res) => {
    const { nombre, dirección, concesionario_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Cliente (Nombre, Dirección, Concesionario_ID) VALUES ($1, $2, $3) RETURNING *',
            [nombre, dirección, concesionario_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getClientes,
    getClienteById,
    createCliente,
};
