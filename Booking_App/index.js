const express = require('express');
// Destructuracion de objetos
const { port } = require('./config');
const flights = require('./routes/flights');
const auth = require('./routes/auth');

const app = express();

// Middleware
app.use(express.urlencoded({
    extended: true
})) 
app.use(express.json()) 



//Midleware para archivos estaticos:
// app.use('/static', express.static(__dirname + '/static')); 
app.use('/static', express.static('static'));

//Routes
app.use(flights);
app.use(auth);


//Página principal
app.get('/',function(request, response){
    return response.send("<h1>Hola mundo</h1>");
})

//Servidor escuchando en el puerto indicado
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}); //Callback function


 

    //NODEMON --> Para ejecutar el servidor en el puerto 4100 sin tener que reiniciar cuando realicemos algun cambio
    // Comando --> "dev":"npx nodemon index.js" --> npm run dev

    //New project
    // npm init -y --> Crea un proyecto con el comando
    // npm install express --save --> Instala el modulo express
    // npm install nodemon -D --> Instala el modulo nodemon
    // npm install dotenv -D --> Instala el modulo dotenv para leer las variables de entorno