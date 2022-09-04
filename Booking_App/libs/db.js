//Instalar librería MySQL2 para NodeJS (Base de datos) (npm install mysql2)

const mysql = require('mysql2/promise');
const { dbHost, dbPort, dbUser, dbPassword, dbName } = require('../config');

// const connection = mysql.createConnection({

//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'booking_app'
// });


const connection = async () => {
    const connection = await mysql.createConnection({
        host: dbHost,
        port: dbPort,
        user: dbUser,
        password: dbPassword,
        database: dbName,
    });

    return connection;
}

const query = async (sql, values) => {
   try{
    //Forma 1
        const result = await (await connection()).query(sql,values);
    
        //Forma 2
    //    const connection = await connection();
    //    const result = await connection.query(sql,values);

        return {
            success: true,
            data:result[0]
        } 
    } catch (error){
        return {
            success: false,
            message: error.message
        }
    }
}

module.exports={
    query
}