const express = require('express');
const multer = require('multer');
const app = express();

// Middleware --> Se ejecuta antes de la petición

// Middleware --> para x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
})) //use: es una función que se ejecuta en el medio de la petición

// Middleware --> para .json
app.use(express.json()) 

// Middleware --> para form-data
app.use(multer().none())

// index, root, home, página principal
//request --> Solicitud
//response --> Respuesta
app.get('/',function(request, response){
    console.log(request);
    return response.send("<h1>Hola mundo</h1>");
})

app.post("/saludar",function(request, response){
    const nombre = request.body.nombre;
    return response.status(201).send(`<h1>Hola ${nombre}</h1>`);
})

//app.put()
//app.delete()

app.listen(4080,()=>{
    console.log('Server is running on port 4080');}); //Callback function

    //NODEMON --> Para ejecutar el servidor en el puerto 4080 sin tener que reiniciar cuando realicemos algun cambio
    // Comando --> "dev":"npx nodemon index.js" --> npm run dev