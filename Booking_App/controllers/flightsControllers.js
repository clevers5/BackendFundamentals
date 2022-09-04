const getView = require("../helpers/getView");
const FlightsModels = require("../models/FlightsModels");


async function getHome (request, response) {
    const flights = new FlightsModels();
    const result = await flights.getAll();
    
    console.log(result);

    return getView(response, 'index.html');

}

function searchFlights (request, response) {
    return getView(response, 'searchFligths.html');
}

module.exports = {getHome, searchFlights}; //Exportamos el router para poder usarlo en el index.js


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