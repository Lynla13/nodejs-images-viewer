import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12597919',
    password: 'pbVbtEz5k5',
    database: 'sql12597919',
})

export default pool;