const getView = require("../helpers/getView");
const FlightsModels = require("../models/FlightsModels");


async function getHome (request, response) {
    return getView(response, 'index.html');

}


async function getFlights (request, response) {
    const result = await FlightsModels.getAll();
    
    return response.json(result);

}

async function getCreateFlightForm (request, response) {
     return getView(response, 'admin/flights/create.html');
}

async function createFlight (request, response) {
    const body = request.body;
    const result = await FlightsModels.create(body);
    return response.json(result);
}

function searchFlights (request, response) {
    return getView(response, 'searchFlights.html');
}

module.exports = {getHome, searchFlights, getFlights, getCreateFlightForm, createFlight}; //Exportamos el router para poder usarlo en el index.js


//Otra forma de hacerlo:

// class Flights{
//     static getHome(require, response){
//         return response.sendFile(path.join(__dirname, '../views/index.html'));
//     }
    
//     static searchFlights(require, response){
//         return response.send("Vuelos!");
//     }
// }

// module.exports = Flights;