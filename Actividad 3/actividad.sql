-- 1. Listado de todos los usuarios con solo los nombres, apellidos y edad, que tengan 20 años de edad.

SELECT nombres, apellidos, edad FROM users WHERE edad = 20;


-- 2. Listado de todas las mujeres en la base de datos que tengan entre 20 y 30 años de edad.

SELECT nombres, edad FROM users WHERE edad >= 20 AND edad <= 30 AND genero = "M"


-- 3. Quién es la persona con menos edad de la base de datos.

SELECT MIN(edad) FROM users

-- 4. Cuantos usuarios hay registrados en la base de datos.

SELECT COUNT(nombres) FROM users


-- 5.Traer los 5 primeros usuarios de la base de datos

SELECT * FROM users ORDER BY id ASC LIMIT 5


-- 6. Traer los 10 últimos usuarios de la base de datos

SELECT * FROM users ORDER BY id DESC LIMIT 10


-- 7. Listar usuarios que su correo finalice en .net

SELECT * FROM users WHERE correo LIKE '%.net' 



-- 8. Listar usuarios no vivan en  colombia.

SELECT * FROM users WHERE pais != "Colombia"



-- 9. Listar usuarios que no vivan en ecuador y panamá.

SELECT * FROM users WHERE pais != "panama" AND pais != "ecuador"


-- 10. Cuantos(numero) usuarios son de colombia y les gusta el rock.

SELECT COUNT(pais) FROM users WHERE pais = "colombia" AND musica = "rock"


-- 11. Actualizar el género musical de todos los usuarios de la base de datos de "metal" a "carranga".

UPDATE users SET musica = "carranga" WHERE musica = "metal"

-- 12. Listado de hombres que les guste la "carranga" sean de colombia y tengan entre 10 y 20 años de edad.

SELECT * FROM users WHERE musica = "carranga" AND pais = "colombia" AND edad >= 20 AND edad <= 30
 

-- 13. Actualizar a todos los usuarios que tengan 99 años, su nuevo género musical favorito será la "carranga"

UPDATE users SET musica = "carranga" WHERE edad = 99


-- 14. Listar todos los usuarios que su nombre inicie con "a","A"

SELECT * FROM users WHERE nombres LIKE 'a%' AND nombres LIKE 'A%'


-- 15. Listar todos los usuarios que su apellido finalice en "z","Z"

SELECT * FROM users WHERE apellidos LIKE '%z' AND apellidos LIKE '%Z'


-- 16. Actualizar los usuarios que tengan 50 años de edad su nuevo género musical será NULL

UPDATE users SET musica = "NULL" WHERE edad = 50; 




-- 17. Listar todos los usuarios que su género musical sea igual a NULL


SELECT * FROM users WHERE edad = 50



-- 18. Cual es el resultado de la suma de todas las edades de la base de datos.

SELECT SUM(edad) FROM users


-- 19. Cuantos usuarios tenemos registrados de "ecuador"

SELECT COUNT(pais) FROM users WHERE pais = "ecuador"


-- 20. Cuántos usuarios son de Colombia y les gusta el vallenato.

SELECT COUNT(pais) FROM users WHERE pais = "colombia" AND musica = "vallenato"

-- pepe