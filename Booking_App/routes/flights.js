const express = require('express');
const router = express.Router(); 
// const {getHome, searchFlights} = require('../controllers/flightsControllers');
const Flights = require('../controllers/flightsControllers');
// const searchFlightsController = new Flights();

router.get('/flights', Flights.getHome);

router.get('/searchFlights', Flights.searchFlights);

module.exports = router; //Exportamos el router para poder usarlo en el index.js