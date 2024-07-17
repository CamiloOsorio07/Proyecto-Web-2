const pool = require('../db');

const getVehiculos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Vehículo');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getVehiculoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Vehículo WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createVehiculo = async (req, res) => {
    const { marca, modelo, año, precio, concesionario_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Vehículo (Marca, Modelo, Año, Precio, Concesionario_ID) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [marca, modelo, año, precio, concesionario_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getVehiculos,
    getVehiculoById,
    createVehiculo,
};
