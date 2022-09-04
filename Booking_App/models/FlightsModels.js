const { query } = require("../libs/db");

class FlightsModels{
    async getAll(){
        // const flights = await query("SELECT * FROM flight");;     
        // return flights;
        return query("SELECT * FROM flights");
    }
}

module.exports = FlightsModels;


