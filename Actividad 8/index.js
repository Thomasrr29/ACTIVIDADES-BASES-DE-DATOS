const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://thomasrr29:aIEILsYu53ymJphr@cluster0.tjsiu0l.mongodb.net/')

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error de conexión"))

db.once('open', function () {
    const userSchema = new mongoose.Schema({
        nombres: String,
        ciudad: String,
        pais: String,
        salario: Number
    })
 
    const users = mongoose.model('users', userSchema);

    // users.updateMany({ciudad: 'París'}, {$set: {ciudad:'Paris'}}, (error, result) => {
    //     if(error){
    //         console.log(error);
    //     } else {
    //         console.log(result);
    //     }
    // })

    const app = express();

    app.use(express.json())

    app.listen(3000, function(){
        console.log('server Arriba')
    });

// 1. Obtener todos los usuarios que sean mayores de 18 años.

    app.get('/api/mayores_edad', async (req, res) => {
        const usuarios_mayor = await users.find({edad: {$gt: 18}})
        res.json(usuarios_mayor)
    });

// 2. Obtener todos los usuarios que sean de Londres o de París.

    app.get('/api/londres_paris', async (req, res) => {
        const londres_paris = await users.find({ciudad: {$in: ["Londres", "Paris"]}})
        res.json(londres_paris)
    });

// 3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

    app.get('/api/salario_medio', async (req, res) => {
        const salario_medio = await users.aggregate([{$match:{salario:{ $gte: 2000 }, edad: { $lte: 30}} } ])
        res.json(salario_medio)
    })

// 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

    app.get('/api/espanoles', async (req, res) => {
        const espanol = await users.aggregate([{$match:{ salario: {$gt: 3000}, pais: "España"}}])
        res.json(espanol)
    })

// 5. Obtener todos los usuarios que tengan entre 25 y 35 años.

    app.get('/api/media_edad', async (req, res) => {
        const media_edad = await users.aggregate([{$match: {edad: {$gte: 25}, edad: {$lte: 35}}}])
        res.json(media_edad)
    })

// 6. Obtener a todos los usuarios que no sean de Estados Unidos.

    app.get('/api/no_estados_unidos'), async (req, res) => {
        const no_estados_unidos = await users.find({pais: {$ne: "Estados Unidos"}})
        res.json(no_estados_unidos)
    }

// 7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

    app.get('/api/complemento'), async (req, res) => {
        const complemento = await users.aggregate({$match: {pais: "Londres", salario: {$gte: 2500}}})
        res.json(complemento)
        /////////////////////////////////
    }

// 8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

    app.get('api/australianos_high'), async (req, res) => {
        const australianos_high = await users.find({pais: "Australia", $and: {peso: {$gte: 140}}})
        res.json(australianos_high)
    }

// 9. Obtener a todos los usuarios que no sean de Londres ni de París.

    app.get('/api/no_londres_paris'), async (req, res) => {
        const no_londres_paris = await users.find({pais: {$nin: ["Londres", "Paris"]}})
        res.json(no_londres_paris)
        /////////////////////////////////
    }

// 10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

    app.get('/api/cuarentones'), async (req, res) => {
        const cuarentones = await users.find({sueldo: {$lt : 2000}, $or: {edad: {$gt: 40}}})
        res.json(cuarentones)
    }

// 11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a
// 180 cm.

    app.get('api/canadienses_altos'), async (req, res) => {

        const canadienses_altos = await users.aggregate({$match: {
            pais: "Canada", 
            $and: {
                $or: [{salario: {$gt: 4000}}, {altura: {$gt: 180}}]
            }    
        }})
        res.json(canadienses_altos)

    }

// 12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

    app.get('api/australianos_high'), async (req, res) => {
    }

// 13. Obtener todos los usuarios que no tengan un correo electrónico registrado.

    app.get('/api/no_correo_registrado'), async (req, res) => {

        const no_correo = await users.find({email: {$exists: false}})
        res.json(no_correo)
    }

// 14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

    app.get('api/franceses_salario'), async (req, res) => {
        const franceses_salario = await users.aggregate([{pais: "Francia", $and: {salario: {$gte: 3000, $lte: 5000}}}])
        res.json(franceses_salario)
    }

// 15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

    app.get('api/brasilenos_peso'), async (req, res) => {
        const brasilenos_peso = await users.aggregate([
            {$match: {peso: {$lt: 120}, $and: {$gt: 140}, $and: {pais: "Brasil"}}}])
            res.json(brasilenos_peso)
    }

// 16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

    app.get('api/argentina_chile_edad'), async (req, res) => {

        const argentina_chile_edad = await users.aggregate([{$match: {pais: {$in: ["Argentina", "Chile"]}, $and: {edad: {$lt: 25}}}}])
        res.json(argentina_chile_edad)
    }

// 17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

    app.get('/api/espana_mexico_salario'), async (req, res) => {

        const espana_mexico_salario = await users.aggregate([{$match: {pais: {$nin: ["España", "Mexico"]}, $and: {salario: {$lt: 3000}}}}])
        res.json(espana_mexico_salario)
    }

// 18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35
// años.

    app.get('api/australianos_high'), async (req, res) => {
        const alemanes = await users.aggregate([{
        $match: {pais: "Alemania"}, 
        $or: [{salario: {$lt: 4000}}, {edad: {$gt: 35}}]}])
        res.json(alemanes)
    }

// 19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

    app.get('api/colombianos_estatura'), async (req, res) => {
        const colombianos_estatura = await users.find({pais: {$ne: "Colombia"}, $and: {estatura: {$lt: 170}}})
        res.json(colombianos_estatura)
    }

// 20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

    app.get('api/indios_sinsalario'), async (req, res) => {
        const indios_sinsalario = await users.find({pais: "India", $and: {salario: {$exists: false}}})
        res.json(indios_sinsalario)
    }
});

