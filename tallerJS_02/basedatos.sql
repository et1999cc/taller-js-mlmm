-- -------------------------- --
-- BASE DE DATOS MONTREAL --- --
-- DISEÑADO POR: MLMM 06/2020 --
-- -------------------------- --


CREATE DATABASE INVENTARIOS;

USE DATABASE INVENTARIOS;

-- --------------------- --
-- TABLAS INDEPENDIENTES --
-- --------------------- --

CREATE TABLE Proveedor(
    idProveedor int NOT NULL auto_increment PRIMARY KEY,
    nombreProveedor varchar(100) NOT NULL,
    nitProveedor varchar(20) NOT NULL,
    direccionProveedor varchar(150) NOT NULL,
    correoProveedor varchar(150) NOT NULL,
    telefonoProveedor varchar(50) NOT NULL
);

CREATE TABLE Cliente(
    idCliente int NOT NULL auto_increment PRIMARY KEY,
    nombreCliente varchar(100) NOT NULL,
    documentoCliente varchar(20) NOT NULL,
    direccionCliente varchar(150) NOT NULL,
    correoCliente varchar(150) NOT NULL,
    telefonoCliente varchar(50) NOT NULL
);

CREATE TABLE DescripcionUnidad(
    idUnidad int NOT NULL auto_increment PRIMARY KEY,
    descripcion varchar(50) NOT NULL
);


-- ------------------------ --
-- TABLAS CON LLVS FORÁNEAS --
-- ------------------------ --

CREATE TABLE Articulo(
    idArticulo int NOT NULL auto_increment PRIMARY KEY,
    nombreArticulo varchar(50) NOT NULL,
    detallesArticulo varchar(150) NOT NULL,
    existencia decimal(6,2),
    idUnidad int NOT NULL,
    precioVenta decimal(10,2) NOT NULL,
    FOREIGN KEY (idUnidad) REFERENCES DescripcionUnidad(idUnidad)
);

CREATE TABLE CompraArticulo(
    idArticulo int NOT NULL,
    fechaCompra date NOT NULL,
    cantidadCompra decimal(6,2) NOT NULL,
    precioTotalCompra decimal(6,2) NOT NULL,
    idProveedor int NOT NULL,
    FOREIGN KEY (idArticulo) REFERENCES Articulo(idArticulo),
    FOREIGN KEY (idProveedor) REFERENCES Proveedor(idProveedor)
);

CREATE TABLE VentaArticulo(
    idArticulo int NOT NULL,
    fechaVenta date NOT NULL,
    cantidadVenta decimal(6,2) NOT NULL,
    precioTotalVenta decimal(6,2) NOT NULL,
    idCliente int NOT NULL,
    FOREIGN KEY (idArticulo) REFERENCES Articulo(idArticulo),
    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente)
)