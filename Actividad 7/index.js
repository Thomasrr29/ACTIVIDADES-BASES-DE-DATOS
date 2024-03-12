const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://thomasrr29:aIEILsYu53ymJphr@cluster0.tjsiu0l.mongodb.net/');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de Conexión'));

db.once('open', function () {
    const userSchema = new mongoose.Schema({
      nombres: String,
      ciudad: String,
      pais: String,
    });

    const User = mongoose.model('basededatos', userSchema);
    const empresas = mongoose.model('basedatos', userSchema);
    const usuarios = mongoose.model('usuarios_nuevo', userSchema)

    const app = express();

    app.use(express.json());

    app.get('/api/pipe', async (req, res) => {
      const users = await User.find()
      res.json(users)
    });

    app.get('/api/limit', async (req, res) => {
      const limit = await User.find().limit(10)
      res.json(limit)
    });

    app.get('/api/empresas', async (req, res) => {
      const empresa = await empresas.find()
      res.json(empresa)
    });

    app.get('/api/idempresas', async (req, res) => {
      const idempresa = await User.find({empresa_id: {$eq: 4}}, {nombres:1, empresa_id:1})
      res.json(idempresa)
    });

    app.get('/api/pais', async (req, res) => {

      const bangladesh = await User.find({pais: {$eq: "Bangladesh"}}, {nombres:1, empresa_id:1, pais:1})
      res.json(bangladesh)
    });

    app.get('/api/ciudad', async (req, res) => {

      const Lakinbugh = await empresas.find({ciudad: {$eq:"Lakinburgh"}}, {nombres:1, ciudad:1, nit:1})
      res.json(Lakinbugh)
    });

    app.listen(3002, function() {
      console.log('Server arriba');
    });


    //USUARIOS NUEVOS ---------------------------------------------------------------------------------------------------------------------------->

  app.get('api/usuarios', async (req, res ) => {

    const usuarios = await usuarios.find()
    res.json(usuarios)

  })


  //QUE TENGAN LA MISMA EDAD
  app.get('api/usuarios_edad', async (req, res) => {

    const usuarios_edad = await usuarios.find({edad: {$eq: 20}})
    res.json(usuarios_edad)

  })

  //VALOR DIFERENTE 
  app.get('api/usuarios'), async (req, res) => {
    const usuarios_ne = await usuarios.find({edad: {$ne: 20}})
    res.json(usuarios_ne)
  }

  //MAYOR O IGUAL

  app.get('api/usuarios_mayor'), async (req, res) => { 

    const usuarios_mayor = await usuarios.find({edad: {$gte: 20}})
    res.json(usuarios_mayor)  

  }

  //MENOR O IGUAL
  app.get('api/usuarios_menor'), async (req, res) => {

    const usuarios_menor = await usuarios.find({edad:{$lte:20}})
    res.json(usuarios_menor)
  }

  //BUSCAR COINCIDENCIAS APARTIR DE UNA LISTA

  app.get('api/usuarios_edades'), async (req, res) => {

    const edades = await usuarios.find({edad: {$in: [5, 10, 15] }})
    res.json(edades)
  }

  //BUSCAR LOS QUE NO CUMPLAN 

  app.get('api/usuarios_dif'), async (req, res) => {

    const diferencias = await usuarios.find({edad: {$nin: [5, 10, 15]}})
    res.json(diferencias)
  }

  app.get('api/edad_null'), async (req, res) => {
    const edad_null = await usuarios.find({edad: {$exists: false}})
    res.json(edad_null)
  }
});



    // app.get('/api/basededatos/limit10', async(req, res) => {
    //     const limit = await user.find().limit(10)
    //     res.json(limit)
    // } )


