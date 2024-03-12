use bgfmodfynqmju2ta4q16;

/*CATEGORIAS*/
CREATE TABLE categorias (id INT PRIMARY KEY AUTO_INCREMENT, categoria VARCHAR(45))

INSERT INTO categorias (categoria) 
VALUES 
    ("Ropa"),
    ("Calzado Deportivo"),
    ("Accesorios"),
    ("Alimentos")

/*DISTRIBUIDORES*/

CREATE TABLE distribuidores (id INT PRIMARY KEY AUTO_INCREMENT, nombreDistribuidor VARCHAR(45))

INSERT INTO distribuidores (nombreDistribuidor) 
    VALUES
    ("Nativos"),
    ("Essential"),
    ("Mylco"),
    ("SportLine")


/*PRODUCTOS*/
CREATE TABLE productos (id INT PRIMARY KEY AUTO_INCREMENT, ReferenciaProducto VARCHAR(45), nombreProducto VARCHAR(45), precioProducto VARCHAR(45), id_distribuidor INT);

INSERT INTO productos (ReferenciaProducto, nombreProducto, precioProducto, id_distribuidor) 
VALUES 
    ("10967589", "Jogger Deportivo", "$129.900", 1),
    ("908796", "Camiseta Deportiva", "$79.900", 4),
    ("876578", "Camibuzo Deportivo", "$109.900", 1),
    ("657465", "Jogger Exclusivo","329.900", 3),
    ("678987", "Camiseta Expensive","129.900", 1),
    ("657465", "Pantaloneta","69.900", 2),
    ("657465", "Short Deportivo","89.900", 2),
    ("657465", "Camiseta Tiras", "49.900", 2)

ALTER TABLE productos ADD FOREIGN KEY (id_distribuidor) REFERENCES distribuidores(id);

/* PRODUCTOS_PREPARAR */
CREATE TABLE productos_preparar (id INT PRIMARY KEY AUTO_INCREMENT, id_pedido INT)

INSERT INTO productos_preparar (id_pedido) 
VALUES 
(1),(2),(3),(4),(5),(6),(7),(8),(9),(10)

ALTER TABLE productos_preparar ADD FOREIGN KEY (id_pedido) REFERENCES pedidos(id);

/* CATEGORIAS, USUARIOS, PRODUCTOS POR PREPARAR */


/*PEDIDOS*/
CREATE TABLE pedidos (id INT PRIMARY KEY AUTO_INCREMENT, fecha DATE, nombre VARCHAR(45), producto_id INT, categoria_id INT, estado VARCHAR(45));

INSERT INTO pedidos (fecha, nombre, producto_id, categoria_id, estado) VALUES 
("2024-4-03", "Thomas Restrepo", 1, 1, "Pagado"),
("2024-4-03", "Samuel", 2, 1, "Recibido"),
("2024-4-03", "Deiby", 2, 1, "Pendiente"),
("2024-4-03", "Jhon", 3, 2, "Recibido"),
("2024-4-03", "Camilo Atehortua", 4, 2, "Pagado"),
("2024-4-03", "Felipe Borrero", 2, 1, "Pendiente"),
("2024-4-03", "Pablo ", 2, 3, "Pagado"),
("2024-4-03", "Lupe", 4, 3, "Pendiente"),
("2024-4-03", "Ana Sofia Castrillon", 2, 3, "Pendiente"),
("2024-4-03", "Sebastian", 3, 4, "Pagado")

ALTER TABLE pedidos ADD FOREIGN KEY (producto_id) REFERENCES productos(id)
/*PRODUCTOS_PREPARAR*/


SELECT pedidos.fecha, pedidos.nombre, productos.nombreProducto, productos.precioProducto, categorias.categoria, pedidos.estado 
FROM pedidos 
INNER JOIN productos_preparar 
INNER JOIN categorias 
INNER JOIN productos 
WHERE pedidos.id = productos_preparar.id_pedido 
AND categorias.id = pedidos.categoria_id 
AND productos.id = pedidos.producto_id
