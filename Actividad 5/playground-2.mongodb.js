/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/

// 1. Listado de todos los usuarios con solo los nombres, apellidos y edad, que tengan 20 años de edad.

db.baseDeDatos.find({edad:20}, {nombres: 1, apellidos: 1, edad: 1})

// 2. Listado de todas las mujeres en la base de datos que tengan entre 20 y 30 años de edad.

db.baseDeDatos.find({genero: "M", edad:{ $gte: 20, $lte: 30 }})


// 3. Quién es la persona con menos edad de la base de datos.

db.baseDeDatos.aggregate([

    {
        $sort: {accommodates: -1}
    },
     
    {
        $project: {
            nombres: 1,
            apellidos: 1,
            edad: 1
        }
    },
    {
        $limit: 1
    }
])


// 4. Cuantos usuarios hay registrados en la base de datos.




// 5.Traer los 5 primeros usuarios de la base de datos
db.baseDeDatos.aggregate ([

   { 
        $sort: {
            accommodates: 1
        }
    },
    {
        $limit: 5
    }

])

// 6. Traer los 10 últimos usuarios de la base de datos

db.baseDeDatos.aggregate([
    {
        $sort: { accommodates: -1}
    },
    {
        $limit: 5
    }
])


// 7. Listar usuarios que su correo finalice en .net

db.baseDeDatos.aggregate([

    {$match: {correo: /\.net/}}
])


// 8. Listar usuarios no vivan en  colombia.

db.baseDeDatos.find ({ pais: {$ne: "Colombia" }})


// 9. Listar usuarios que no vivan en ecuador y panamá.

db.baseDeDatos.find ({ pais: {$nin: ["venezuela", "panama"] }})

db.baseDeDatos.find({genero: {$ne: "M"}})

// 10. Cuantos(numero) usuarios son de colombia y les gusta el rock.

db.baseDeDatos.count( {pais: "colombia", musica: "rock"})

db.baseDeDatos.count({pais: "venezuela"})

// 11. Actualizar el género musical de todos los usuarios de la base de datos de "metal" a "carranga".

db.baseDeDatos.updateMany({musica: "metal"}, {$set: {musica:"carranga"}})

db.baseDeDatos.find({musica: "carranga"})

// 12. Listado de hombres que les guste la "carranga" sean de colombia y tengan entre 10 y 20 años de edad.

db.baseDeDatos.aggregate([
    {
        $match: {
        $and: [
            {genero: "H"},
            {musica: "carranga"},
            {pais: "colombia"},
            {edad: {$gte: 10, $lte: 20}}
        ]
          
        }
    }
])

// 13. Actualizar a todos los usuarios que tengan 99 años, su nuevo género musical favorito será la "carranga"

db.baseDeDatos.updateMany({edad: 99}, {$set: {musica: "carranga"}})

db.baseDeDatos.find(

   { $and: [
        {edad: 99}, 
        {musica: {$ne: "carranga"}}
    ]}
)

// 14. Listar todos los usuarios que su nombre inicie con "a","A"

db.baseDeDatos.find({nombres: /^[Aa]/} 
)
// 15. Listar todos los usuarios que su apellido finalice en "z","Z"




// 16. Actualizar los usuarios que tengan 50 años de edad su nuevo género musical será NULL

db.baseDeDatos.updateMany( { edad: 50 },{ $set: { musica: "NULL" }})



// 17. Listar todos los usuarios que su género musical sea igual a NULL

db.baseDeDatos.find({musica: "NULL"})



// 18. Cual es el resultado de la suma de todas las edades de la base de datos.

db.baseDeDatos.aggregate([

    {
        $group: {
            id: null,
            totalEdad: {$sum: "$edad"}
        }
    }

]
)


// 19. Cuantos usuarios tenemos registrados de "ecuador"

db.baseDeDatos.count({pais: "ecuador"})


// 20. Cuántos usuarios son de Colombia y les gusta el vallenato.

db.baseDeDatos.count({pais: "colombia"}, {musica: "vallenato"})

db.database.find({
    $and: [
        {pais: "colombia"},
        {musica: "vallenato"}
    ]
}
)


// $or Selecciona lo que cumple con la condición
db.baseDeDatos.find( {$or:[ {edad: { $gte: 67 } }, { pais: "colombia" }]} )



// $nor Selecciona lo que no cumple con las condiciones 

db.baseDeDatos.find({$nor: [{edad: {$gte: 18}}, {pais: ["panama", "colombia", "canada"]}, {genero: "M"}]})


//$not para seleccionar los elementos que no cumplan con la condicion y que no tengan el campo 

db.baseDeDatos.find ( { genero: { $not: { $eq: "H" } } }) 


//OPERADORES DE COMPARACIONES 

//$eq Igual al valor dado

db.baseDeDatos.find ({genero: {$eq: "M"}})

//$gt Mayor valor dado

db.baseDeDatos.find ({edad: {$gte: 18}})

//$gte Mayor o igual al valor dado

db.baseDeDatos.find ({edad: {$gte: 18}})

//$lt Menor al valor dado

//$lte Menor o igual al valor dado



//$in 

db.baseDeDatos.find({edad: {$in: [15, 45, 65]}})

//$nin (tambien con los que no tienen nada)

db.baseDeDatos.find({nombres: {$nin: ["Jaime"]}})

//$ne Con los que no son igual

db.baseDeDatos.find({nombres: {$ne: "Thomas"}})









