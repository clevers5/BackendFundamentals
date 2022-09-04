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

const query = async (sql) => {
    const result = await (await connection()).query(sql,values);
    console.log(result);
    return result;
}

modeule.exports={
    query
}