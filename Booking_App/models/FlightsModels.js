const formatDate = require("../helpers/formatDate");
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
    //     const {origen, destino, hora_salida, hora_llegada, precio} = data;
    //     return query(`INSERT INTO flights(origen, destino, hora_salida, hora_llegada, precio) values("${origen}","${destino}","${formatDate(hora_salida)}","${formatDate(hora_llegada)}","${precio}")`); //Devuelve una promesa
     data.hora_salida = formatDate(data.hora_salida);
     data.hora_llegada = formatDate(data.hora_llegada);
   //Segunda forma de hacerlo 
    return query(`INSERT INTO flights(??) 
                                values(?)`,
    [
        Object.keys(data), 
        Object.values(data)
    ]); //Devuelve una promesa
    }   
}

module.exports = FlightsModels;


