const express = require('express');

const app = express();

// index, root, home, página principal
//request --> Solicitud
//response --> Respuesta
app.get('/',function(request, response){
    console.log(request);
    return response.send("<h1>Hola mundo</h1>");
})

app.listen(4080,()=>{
    console.log('Server is running on port 4080');}); //Callback function
