CREATE TABLE Concesionario (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    Dirección VARCHAR(200)
);

CREATE TABLE Vehículo (
    ID SERIAL PRIMARY KEY,
    Marca VARCHAR(50),
    Modelo VARCHAR(50),
    Año INT,
    Precio DECIMAL,
    Concesionario_ID INT REFERENCES Concesionario(ID)
);

CREATE TABLE Insumo (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    Descripción TEXT,
    Precio DECIMAL,
    Almacen_ID INT REFERENCES Almacén(ID)
);

CREATE TABLE Almacén (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    Ubicación VARCHAR(200)
);

CREATE TABLE Empleado (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    Cargo VARCHAR(50),
    Salario DECIMAL,
    Concesionario_ID INT REFERENCES Concesionario(ID)
);

CREATE TABLE Cliente (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    Dirección VARCHAR(200),
    Concesionario_ID INT REFERENCES Concesionario(ID)
);

CREATE TABLE Compra (
    ID SERIAL PRIMARY KEY,
    Fecha DATE,
    Cliente_ID INT REFERENCES Cliente(ID),
    Empleado_ID INT REFERENCES Empleado(ID),
    Precio_Total DECIMAL
);

CREATE TABLE DetalleVenta (
    ID SERIAL PRIMARY KEY,
    Compra_ID INT REFERENCES Compra(ID),
    Producto_ID INT,
    Tipo_Producto VARCHAR(50),
    Cantidad INT,
    Precio_Unitario DECIMAL,
    Precio_Total DECIMAL
);

-------------------DATOS------------------------------------------------------

-- Datos simulados para la tabla Concesionario
INSERT INTO Concesionario (Nombre, Dirección) VALUES
('Concesionario XYZ', 'Calle Principal 123, Ciudad A'),
('Autos del Norte', 'Avenida Independencia 456, Ciudad B'),
('Autos Rápidos SA', 'Boulevard Libertad 789, Ciudad C'),
('Concesionaria Veloz', 'Calle Velocidad 321, Ciudad D'),
('Automóviles Elegantes', 'Avenida Elegancia 654, Ciudad E'),
('Carros y Motores', 'Calle Motor 987, Ciudad F'),
('Autos Modernos', 'Avenida Modernidad 234, Ciudad G'),
('Carros Veloces', 'Calle Velocidad 567, Ciudad H'),
('Concesionario Deluxe', 'Boulevard Lujo 890, Ciudad I'),
('Autos Clásicos', 'Avenida Clásica 123, Ciudad J');

-- Datos simulados para la tabla Almacén
INSERT INTO Almacén (Nombre, Ubicación) VALUES
('Almacén Principal', 'Calle Almacenamiento 1, Ciudad A'),
('Depósito Autos', 'Avenida Deposito 2, Ciudad B'),
('Almacén de Repuestos', 'Boulevard Repuestos 3, Ciudad C'),
('Almacén Autos Antiguos', 'Calle Antigüedad 4, Ciudad D'),
('Depósito de Insumos', 'Avenida Insumos 5, Ciudad E'),
('Almacén de Autos de Lujo', 'Calle Lujo 6, Ciudad F'),
('Almacén de Motores', 'Avenida Motores 7, Ciudad G'),
('Depósito Rápido', 'Boulevard Rápido 8, Ciudad H'),
('Almacén de Vehículos', 'Calle Vehículos 9, Ciudad I'),
('Almacén Moderno', 'Avenida Moderna 10, Ciudad J');

-- Datos simulados para la tabla Vehículo
INSERT INTO Vehículo (Marca, Modelo, Año, Precio, Concesionario_ID) VALUES
('Toyota', 'Corolla', 2020, 20000, 1),
('Honda', 'Civic', 2019, 18000, 1),
('Ford', 'Focus', 2021, 22000, 2),
('Chevrolet', 'Cruze', 2018, 19000, 2),
('Nissan', 'Sentra', 2022, 23000, 3),
('Volkswagen', 'Jetta', 2021, 21000, 3),
('Hyundai', 'Elantra', 2019, 19500, 4),
('Mazda', '3', 2020, 20500, 4),
('Kia', 'Forte', 2023, 22500, 5),
('Subaru', 'Impreza', 2021, 21500, 5);

-- Datos simulados para la tabla Insumo
INSERT INTO Insumo (Nombre, Descripción, Precio, Almacen_ID) VALUES
('Aceite', 'Aceite para motor', 50, 1),
('Filtro de Aire', 'Filtro de aire para motor', 30, 2),
('Llantas', 'Juego de llantas nuevas', 120, 3),
('Batería', 'Batería de arranque', 100, 4),
('Espejos', 'Espejos laterales', 80, 5),
('Luces', 'Juego de luces LED', 70, 6),
('Radiador', 'Radiador para motor', 150, 7),
('Escobillas Limpiaparabrisas', 'Juego de escobillas', 40, 8),
('Tapicería', 'Tapicería completa', 200, 9),
('Cargador de Batería', 'Cargador automático', 90, 10);

-- Datos simulados para la tabla Empleado
INSERT INTO Empleado (Nombre, Cargo, Salario, Concesionario_ID) VALUES
('Juan Pérez', 'Vendedor', 1500, 1),
('María Gómez', 'Gerente', 2500, 2),
('Pedro Ramírez', 'Asesor de ventas', 1700, 3),
('Luisa Martínez', 'Contadora', 2200, 4),
('Andrés Herrera', 'Mecánico', 1800, 5),
('Ana Rodríguez', 'Recepcionista', 1600, 6),
('Jorge Sánchez', 'Técnico de servicio', 1900, 7),
('Laura Jiménez', 'Ingeniero automotriz', 2600, 8),
('Gabriel Torres', 'Supervisor de almacén', 2000, 9),
('Carolina Castro', 'Asistente administrativo', 1800, 10);

-- Datos simulados para la tabla Cliente
INSERT INTO Cliente (Nombre, Dirección, Concesionario_ID) VALUES
('Carlos López', 'Dirección C', 1),
('Ana Fernández', 'Dirección D', 2),
('Pablo Torres', 'Dirección E', 3),
('Sofía Medina', 'Dirección F', 4),
('David Vargas', 'Dirección G', 5),
('Julia Ramírez', 'Dirección H', 6),
('Martín Soto', 'Dirección I', 7),
('Valeria Mora', 'Dirección J', 8),
('Diego Cruz', 'Dirección K', 9),
('Fernanda Ruiz', 'Dirección L', 10);

-- Datos simulados para la tabla Compra
INSERT INTO Compra (Fecha, Cliente_ID, Empleado_ID, Precio_Total) VALUES
('2024-07-01', 1, 1, 2050),
('2024-07-02', 2, 2, 1830),
('2024-07-03', 3, 3, 2150),
('2024-07-04', 4, 4, 1980),
('2024-07-05', 5, 5, 2250),
('2024-07-06', 6, 6, 1900),
('2024-07-07', 7, 7, 2050),
('2024-07-08', 8, 8, 2400),
('2024-07-09', 9, 9, 2100),
('2024-07-10', 10, 10, 1950);

-- Datos simulados para la tabla DetalleVenta
INSERT INTO DetalleVenta (Compra_ID, Producto_ID, Tipo_Producto, Cantidad, Precio_Unitario, Precio_Total) VALUES
(1, 1, 'vehículo', 1, 20000, 20000),
(2, 2, 'insumo', 2, 30, 60),
(3, 3, 'vehículo', 1, 22000, 22000),
(4, 4, 'insumo', 2, 100, 200),
(5, 5, 'vehículo', 1, 23000, 23000),
(6, 6, 'insumo', 2, 70, 140),
(7, 7, 'vehículo', 1, 24000, 24000),
(8, 8, 'insumo', 2, 40, 80),
(9, 9, 'vehículo', 1, 25000, 25000),
(10, 10, 'insumo', 2, 90, 180);


CREATE DATABASE concesionario;
