use bo57p3njkuyfdd3bqpe1

CREATE TABLE colores (id INT PRIMARY KEY AUTO_INCREMENT, color VARCHAR(45));

INSERT INTO colores (color) VALUES ("Rojo"), ("Azul"), ("Verde"), ("Negro"), ("Gris");

CREATE TABLE marcas (id INT PRIMARY KEY AUTO_INCREMENT, marca VARCHAR(45));

INSERT INTO marcas (marca) VALUES ("Kia"), ("Ferrari"), ("BMW"), ("Audi"), ("Foton"), ("Roll Royce");

CREATE TABLE tipo_vehiculo (id INT PRIMARY KEY AUTO_INCREMENT, tipo VARCHAR(45), id_marca INT);

INSERT INTO tipo_vehiculo (tipo, id_marca) VALUES ("Automovil", 1), ("Camioneta", 1), ("Deportivo", 2), ("Camion", 5), ("Lujoso", 6)

CREATE TABLE vehiculos (id INT PRIMARY KEY AUTO_INCREMENT, modelo VARCHAR(45), color_id INT, id_tipo INT);

INSERT INTO vehiculos (modelo, color_id, id_tipo) VALUES ("AUDI R8", 3, 1),
("KIA REVOLUCIONARY", 1, 2),
("FOTON CLASSIC", 3, 4),
("ROLL ROYCE FIRED", 4, 5),
("FERRARI ST", 2, 3);
ALTER TABLE tipo_vehiculo ADD FOREIGN KEY (id_marca) REFERENCES marcas(id);
ALTER TABLE vehiculos ADD FOREIGN KEY (color_id) REFERENCES colores(id);
ALTER TABLE vehiculos ADD FOREIGN KEY (id_tipo) REFERENCES tipo_vehiculo(id);

DELETE FROM vehiculos WHERE id > 5

ALTER TABLE marcas AUTO_INCREMENT = 0

UPDATE vehiculos SET modelo = "KIA R8" WHERE modelo = "AUDI R8"

SELECT vehiculos.modelo, colores.color, tipo_vehiculo.tipo, marcas.marca FROM vehiculos INNER JOIN colores INNER JOIN tipo_vehiculo INNER JOIN marcas WHERE 
vehiculos.color_id = colores.id AND 
vehiculos.id_tipo = tipo_vehiculo.id AND 
tipo_vehiculo.tipo_id_marca = marcas.id 


CREATE VIEW vista_colores_disponibles as SELECT * FROM colores WHERE color IS NOT NULL

CREATE VIEW carros_deportivos as SELECT * FROM vehiculos WHERE id_tipo = 3

CREATE VIEW vista_tipos_vehiculo as SELECT vehiculos.modelo, tipo_vehiculo.tipo_id_marca, tipo_vehiculo.tipo FROM vehiculos INNER JOIN tipo_vehiculo WHERE tipo_vehiculo.id = vehiculos.id_tipo

CREATE VIEW marcas_registradas as SELECT marca FROM marcas WHERE marca IS NOT NULL;

CREATE VIEW carros_rojos as SELECT vehiculos.id_vehiculo, vehiculos.modelo, colores.color FROM vehiculos INNER JOIN colores ON vehiculos.color_id = colores.id WHERE colores.color = "Rojo"

ALTER TABLE vehiculos CHANGE id id_vehiculo INT AUTO_INCREMENT;

DROP VIEW carros_rojos

select * from carros_rojos

select * from colores

select * from tipo_vehiculo






