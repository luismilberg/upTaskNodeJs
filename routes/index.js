const express = require('express');

//importar el controlador

const proyectosController = require('../controllers/proyectosController');

const router = express.Router();

module.exports = function () {

    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);


    return router;

}
