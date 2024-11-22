//iniciamos el modulo del proyecto
const express = require('express');
const dbconect = require('./config');
const crudRouter = require('./Crud/crud');
const post = require('./Modelos/Post');
const app = express();





////Las App para las rutas.
app.use(express.json());
app.use(crudRouter);
dbconect();
app.listen(3001 ,() => {
    console.log("conectado al servidor 3001");
})