async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejs-basic' });
    // query database
    //const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
}