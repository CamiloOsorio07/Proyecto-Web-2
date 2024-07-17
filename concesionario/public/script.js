document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/api'; // Cambiar la URL base según tu configuración
    const concesionariosForm = document.getElementById('concesionarioForm');
    const vehiculosForm = document.getElementById('vehiculoForm');
    const insumosForm = document.getElementById('insumoForm');
    const almacenesForm = document.getElementById('almacenForm');
    const empleadosForm = document.getElementById('empleadoForm');
    const clientesForm = document.getElementById('clienteForm');
    const comprasForm = document.getElementById('compraForm');
    const detallesVentaForm = document.getElementById('detalleVentaForm');

    const concesionariosList = document.getElementById('concesionarios');
    const vehiculosList = document.getElementById('vehiculos');
    const insumosList = document.getElementById('insumos');
    const almacenesList = document.getElementById('almacenes');
    const empleadosList = document.getElementById('empleados');
    const clientesList = document.getElementById('clientes');
    const comprasList = document.getElementById('compras');
    const detallesVentaList = document.getElementById('detallesVenta');

    // Función para cargar concesionarios desde la API
    const cargarConcesionarios = async () => {
        try {
            const response = await fetch(`${baseUrl}/concesionarios`);
            const data = await response.json();

            concesionariosList.innerHTML = '';
            data.forEach(concesionario => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${concesionario.nombre}</h3><p>Dirección: ${concesionario.direccion}</p>`;
                concesionariosList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar los concesionarios:', error);
        }
    };

    // Función para cargar vehículos desde la API
    const cargarVehiculos = async () => {
        try {
            const response = await fetch(`${baseUrl}/vehiculos`);
            const data = await response.json();

            vehiculosList.innerHTML = '';
            data.forEach(vehiculo => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${vehiculo.marca} ${vehiculo.modelo}</h3><p>Año: ${vehiculo.anio}, Precio: $${vehiculo.precio}</p>`;
                vehiculosList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar los vehículos:', error);
        }
    };

    // Función para cargar insumos desde la API
    const cargarInsumos = async () => {
        try {
            const response = await fetch(`${baseUrl}/insumos`);
            const data = await response.json();

            insumosList.innerHTML = '';
            data.forEach(insumo => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${insumo.nombre}</h3><p>Descripción: ${insumo.descripcion}, Precio: $${insumo.precio}</p>`;
                insumosList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar los insumos:', error);
        }
    };

    // Función para cargar almacenes desde la API
    const cargarAlmacenes = async () => {
        try {
            const response = await fetch(`${baseUrl}/almacenes`);
            const data = await response.json();

            almacenesList.innerHTML = '';
            data.forEach(almacen => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${almacen.nombre}</h3><p>Ubicación: ${almacen.ubicacion}</p>`;
                almacenesList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar los almacenes:', error);
        }
    };

    // Función para cargar empleados desde la API
    const cargarEmpleados = async () => {
        try {
            const response = await fetch(`${baseUrl}/empleados`);
            const data = await response.json();

            empleadosList.innerHTML = '';
            data.forEach(empleado => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${empleado.nombre}</h3><p>Cargo: ${empleado.cargo}, Salario: $${empleado.salario}</p>`;
                empleadosList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar los empleados:', error);
        }
    };

    // Función para cargar clientes desde la API
    const cargarClientes = async () => {
        try {
            const response = await fetch(`${baseUrl}/clientes`);
            const data = await response.json();

            clientesList.innerHTML = '';
            data.forEach(cliente => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${cliente.nombre}</h3><p>Dirección: ${cliente.direccion}</p>`;
                clientesList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar los clientes:', error);
        }
    };

    // Función para cargar compras desde la API
    const cargarCompras = async () => {
        try {
            const response = await fetch(`${baseUrl}/compras`);
            const data = await response.json();

            comprasList.innerHTML = '';
            data.forEach(compra => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>Compra #${compra.id}</h3><p>Fecha: ${compra.fecha}, Cliente: ${compra.cliente_id}, Empleado: ${compra.empleado_id}, Precio Total: $${compra.precio_total}</p>`;
                comprasList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar las compras:', error);
        }
    };

    // Función para cargar detalles de venta desde la API
    const cargarDetallesVenta = async () => {
        try {
            const response = await fetch(`${baseUrl}/detallesventa`);
            const data = await response.json();

            detallesVentaList.innerHTML = '';
            data.forEach(detalleVenta => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>Detalle de Venta #${detalleVenta.id}</h3><p>Compra: ${detalleVenta.compra_id}, Producto: ${detalleVenta.producto_id}, Tipo: ${detalleVenta.tipo_producto}, Cantidad: ${detalleVenta.cantidad}, Precio Unitario: $${detalleVenta.precio_unitario}, Precio Total: $${detalleVenta.precio_total}</p>`;
                detallesVentaList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar los detalles de venta:', error);
        }
    };

    // Cargar todos los datos al cargar la página
    cargarConcesionarios();
    cargarVehiculos();
    cargarInsumos();
    cargarAlmacenes();
    cargarEmpleados();
    cargarClientes();
    cargarCompras();
    cargarDetallesVenta();

    // Eventos para enviar formularios (ejemplo para concesionarios)
    concesionariosForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombreC').value;
        const direccion = document.getElementById('direccionC').value;

        try {
            const response = await fetch(`${baseUrl}/concesionarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, direccion })
            });

            if (response.ok) {
                alert('Concesionario creado exitosamente');
                cargarConcesionarios();
                concesionariosForm.reset();
            } else {
                console.error('Error al crear el concesionario');
                alert('Error al crear el concesionario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

    // Evento para enviar el formulario de creación de vehículo (ejemplo)
    vehiculosForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const marca = document.getElementById('marcaV').value;
        const modelo = document.getElementById('modeloV').value;
        const anio = document.getElementById('anioV').value;
        const precio = document.getElementById('precioV').value;
        const idConcesionario = document.getElementById('idConcesionarioV').value;

        try {
            const response = await fetch(`${baseUrl}/vehiculos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ marca, modelo, anio, precio, idConcesionario })
            });

            if (response.ok) {
                alert('Vehículo creado exitosamente');
                cargarVehiculos();
                vehiculosForm.reset();
            } else {
                console.error('Error al crear el vehículo');
                alert('Error al crear el vehículo');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

    // Evento para enviar el formulario de creación de insumo (ejemplo)
    insumosForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombreI').value;
        const descripcion = document.getElementById('descripcionI').value;
        const precio = document.getElementById('precioI').value;
        const idAlmacen = document.getElementById('idAlmacenI').value;

        try {
            const response = await fetch(`${baseUrl}/insumos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, descripcion, precio, idAlmacen })
            });

            if (response.ok) {
                alert('Insumo creado exitosamente');
                cargarInsumos();
                insumosForm.reset();
            } else {
                console.error('Error al crear el insumo');
                alert('Error al crear el insumo');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

    // Evento para enviar el formulario de creación de almacén (ejemplo)
    almacenesForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombreA').value;
        const ubicacion = document.getElementById('ubicacionA').value;

        try {
            const response = await fetch(`${baseUrl}/almacenes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, ubicacion })
            });

            if (response.ok) {
                alert('Almacén creado exitosamente');
                cargarAlmacenes();
                almacenesForm.reset();
            } else {
                console.error('Error al crear el almacén');
                alert('Error al crear el almacén');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

    // Evento para enviar el formulario de creación de empleado (ejemplo)
    empleadosForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombreE').value;
        const cargo = document.getElementById('cargoE').value;
        const salario = document.getElementById('salarioE').value;
        const idConcesionario = document.getElementById('idConcesionarioE').value;

        try {
            const response = await fetch(`${baseUrl}/empleados`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, cargo, salario, idConcesionario })
            });

            if (response.ok) {
                alert('Empleado creado exitosamente');
                cargarEmpleados();
                empleadosForm.reset();
            } else {
                console.error('Error al crear el empleado');
                alert('Error al crear el empleado');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

    // Evento para enviar el formulario de creación de cliente (ejemplo)
    clientesForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombreCli').value;
        const direccion = document.getElementById('direccionCli').value;
        const idConcesionario = document.getElementById('idConcesionarioCli').value;

        try {
            const response = await fetch(`${baseUrl}/clientes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, direccion, idConcesionario })
            });

            if (response.ok) {
                alert('Cliente creado exitosamente');
                cargarClientes();
                clientesForm.reset();
            } else {
                console.error('Error al crear el cliente');
                alert('Error al crear el cliente');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

    // Evento para enviar el formulario de creación de compra (ejemplo)
    comprasForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const fecha = document.getElementById('fechaCompra').value;
        const idCliente = document.getElementById('idClienteCompra').value;
        const idEmpleado = document.getElementById('idEmpleadoCompra').value;
        const precioTotal = document.getElementById('precioTotalCompra').value;

        try {
            const response = await fetch(`${baseUrl}/compras`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fecha, idCliente, idEmpleado, precioTotal })
            });

            if (response.ok) {
                alert('Compra creada exitosamente');
                cargarCompras();
                comprasForm.reset();
            } else {
                console.error('Error al crear la compra');
                alert('Error al crear la compra');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

    // Evento para enviar el formulario de creación de detalle de venta (ejemplo)
    detallesVentaForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const idCompra = document.getElementById('idCompraDV').value;
        const idProducto = document.getElementById('idProductoDV').value;
        const tipoProducto = document.getElementById('tipoProductoDV').value;
        const cantidad = document.getElementById('cantidadDV').value;
        const precioUnitario = document.getElementById('precioUnitarioDV').value;
        const precioTotal = document.getElementById('precioTotalDV').value;

        try {
            const response = await fetch(`${baseUrl}/detallesventa`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idCompra, idProducto, tipoProducto, cantidad, precioUnitario, precioTotal })
            });

            if (response.ok) {
                alert('Detalle de Venta creado exitosamente');
                cargarDetallesVenta();
                detallesVentaForm.reset();
            } else {
                console.error('Error al crear el detalle de venta');
                alert('Error al crear el detalle de venta');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    });

});
