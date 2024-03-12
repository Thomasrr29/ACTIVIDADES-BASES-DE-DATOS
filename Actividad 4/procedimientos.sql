use bo57p3njkuyfdd3bqpe1

delimiter // 

  CREATE Procedure cambiar_modelo_automovil (in valor_actual VARCHAR(45), in valor_cambiar VARCHAR(45))
  begin 
  UPDATE vehiculos SET modelo = valor_cambiar WHERE modelo = valor_actual;
  end // 
delimiter;

delimiter // 

  CREATE Procedure agregar_vehiculo ( modelo VARCHAR(45), in color_id INT, in id_tipo INT)
  begin 
  INSERT INTO vehiculos (modelo, color_id, id_tipo) VALUES (modelo, color_id, id_tipo);
  end // 
delimiter;

delimiter // 

  CREATE Procedure eliminar_vehiculo ( in id_auto INT)
  begin 
  DELETE FROM vehiculos WHERE id_vehiculo = id_auto;
  end // 
delimiter;

delimiter // 

  create PROCEDURE actualizar_color (in valor_color VARCHAR(45), in cambio_color VARCHAR(45))
  begin 
  UPDATE colores SET color = cambio_color WHERE color = valor_color;
  end // 
delimiter;

delimiter //

  CREATE PROCEDURE seleccionar_tipo (in id_car INT)
  begin
  SELECT vehiculos.modelo, vehiculos.id_tipo, tipo_vehiculo.tipo FROM vehiculos INNER JOIN tipo_vehiculo ON vehiculos.id_tipo = id_car;
  end
// delimiter 

DROP Procedure seleccionar_tipo

call cambiar_modelo_automovil ("Camaro", "CAMARO");
call agregar_vehiculo ("Audi SR6", 1, 4);
call eliminar_vehiculo (6);
call actualizar_color ("Gris", "Amarillo");
call seleccionar_tipo (2)


select * from vehiculos
