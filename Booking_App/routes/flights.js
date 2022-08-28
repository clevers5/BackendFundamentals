const express = require('express');
const path = require('path'); //Gestionar Rutas para archivos
//console.log(__dirname); // Carpeta o ubicacion de los archivos

const router = express.Router(); 



router.get('/flights', (request, response) => {
    return response.sendFile(path.join(__dirname, '../views/index.html'));
} );

module.exports = router; //Exportamos el router para poder usarlo en el index.js