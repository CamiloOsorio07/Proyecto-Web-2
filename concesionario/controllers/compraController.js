const pool = require('../db');

const getCompras = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Compra');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCompraById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Compra WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createCompra = async (req, res) => {
    const { fecha, cliente_id, empleado_id, precio_total } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Compra (Fecha, Cliente_ID, Empleado_ID, Precio_Total) VALUES ($1, $2, $3, $4) RETURNING *',
            [fecha, cliente_id, empleado_id, precio_total]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getCompras,
    getCompraById,
    createCompra,
};
