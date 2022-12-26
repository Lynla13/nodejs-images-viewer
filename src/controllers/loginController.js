import pool from "../configs/connectDB";
//import connection from "../model/baseModel";

let getLoginPage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    console.table(rows);
    return res.render('login.ejs', { dataUser: JSON.stringify(rows) })
}
module.exports = {
    getLoginPage
}