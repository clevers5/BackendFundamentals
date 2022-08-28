// Lee las variables de entorno
require("dotenv").config(); 

const config = {
    port: process.env.PORT,
}

module.exports = config; //Exportamos la configuracion para poder usarla en el index.js