const pool = require('../db');

const getEmpleados = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Empleado');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getEmpleadoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Empleado WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createEmpleado = async (req, res) => {
    const { nombre, cargo, salario, concesionario_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Empleado (Nombre, Cargo, Salario, Concesionario_ID) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, cargo, salario, concesionario_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getEmpleados,
    getEmpleadoById,
    createEmpleado,
};
