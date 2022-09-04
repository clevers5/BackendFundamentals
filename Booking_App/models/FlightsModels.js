const { query } = require("../libs/db");

class FlightsModels{
    // Static no es necesario instanciar la clase para poder usar el método
    static getAll(){
        // const flights = await query("SELECT * FROM flight");;     
        // return flights;
        return query("SELECT * FROM flights");
    }


    static create(data){
        //Crear Query
        //INSERT INTO
    }
}

module.exports = FlightsModels;


