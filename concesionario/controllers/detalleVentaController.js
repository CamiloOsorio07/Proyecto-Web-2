const pool = require('../db');

const getDetalleVentas = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM DetalleVenta');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getDetalleVentaById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM DetalleVenta WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createDetalleVenta = async (req, res) => {
    const { compra_id, producto_id, tipo_producto, cantidad, precio_unitario, precio_total } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO DetalleVenta (Compra_ID, Producto_ID, Tipo_Producto, Cantidad, Precio_Unitario, Precio_Total) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [compra_id, producto_id, tipo_producto, cantidad, precio_unitario, precio_total]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getDetalleVentas,
    getDetalleVentaById,
    createDetalleVenta,
};
