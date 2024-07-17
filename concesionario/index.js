const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const concesionarioRoutes = require('./routes/concesionarioRoutes');
const vehiculoRoutes = require('./routes/vehiculoRoutes');
const insumoRoutes = require('./routes/insumoRoutes');
const almacenRoutes = require('./routes/almacenRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const compraRoutes = require('./routes/compraRoutes');
const detalleVentaRoutes = require('./routes/detalleVentaRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas de la API
app.use('/api', concesionarioRoutes);
app.use('/api', vehiculoRoutes);
app.use('/api', insumoRoutes);
app.use('/api', almacenRoutes);
app.use('/api', empleadoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', compraRoutes);
app.use('/api', detalleVentaRoutes);

// Servir archivos estáticos (interfaz de usuario)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Conexión a la base de datos y luego iniciar el servidor
db.connect()
    .then(() => {
        console.log('Conexión a la base de datos exitosa');

        // Iniciar el servidor
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });
