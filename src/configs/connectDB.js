// get the client
import mysql from 'mysql2'

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-basic'
});

// simple query
export default connection;