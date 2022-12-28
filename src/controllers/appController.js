import pool from "../configs/connectDB";
//import connection from "../model/baseModel";

let getAppPage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs', { dataUser: JSON.stringify(rows) })
}
module.exports = {
    getAppPage
}