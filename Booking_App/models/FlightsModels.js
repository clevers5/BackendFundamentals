const { query } = require("../libs/db");

class FlightsModels{
    async getAll(){
        const flights = await query("SELECT * FROM flights");
        console.log(flights);
    }
}

module.exports = FlightsModels;


