const pool = require('../db');

const getConcesionarios = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Concesionario');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getConcesionarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Concesionario WHERE ID = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createConcesionario = async (req, res) => {
    const { nombre, dirección } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Concesionario (Nombre, Dirección) VALUES ($1, $2) RETURNING *',
            [nombre, dirección]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
    module.exports = {
        getConcesionarios,
        getConcesionarioById,
        createConcesionario,
    };
    