use bfmmxbtuqnpjbuwuiepf

CREATE TABLE ESTUDIANTES (id INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(45), edad INT, grado VARCHAR(45), id_materia1 INT, id_materia2 INT, id_materia3 INT)

INSERT INTO ESTUDIANTES (nombre, edad, grado, id_materia1, id_materia2, id_materia3) VALUES 
("Thomas", 18, "11A", 1, 5, 7),
("Juan", 16, "11A", 2, 6, 8),
("Felipe", 17, "11C", 3, 9, 10),
("Gustavo", 17, "11A", 3, 2, 1),
("Pedro", 16, "11B", 7, 6, 5),
("Santiago", 18, "11A", 10, 5, 4),
("Nicole", 19, "11D", 4, 5, 6),
("Paulina", 16, "11A", 6, 7, 8),
("Gilberto", 18, "11B", 1, 2, 3),
("Kevin", 16, "11C", 7, 8, 9)


CREATE TABLE MATERIAS (id INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(45), profesor VARCHAR(45))

INSERT INTO MATERIAS (nombre, profesor) VALUES 
("Lenguaje", "Carlos"),
("Matematicas", "Gustavo"),
("Historia", "Esteban"),
("Filosofia", "Guinea"),
("Ed Fisica", "Mauricio"),
("Fisica", "Camilo"),
("Economia", "Pipe"),
("Ingles", "Juan"),
("Artistica", "Pedro"),
("Sociales", "Deisy")

ALTER TABLE ESTUDIANTES ADD FOREIGN KEY (id_materia1) REFERENCES MATERIAS(id)

ALTER TABLE ESTUDIANTES ADD FOREIGN KEY (id_materia2) REFERENCES MATERIAS(id)

ALTER TABLE ESTUDIANTES ADD FOREIGN KEY (id_materia3) REFERENCES MATERIAS(id)
