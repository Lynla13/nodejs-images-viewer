import pool from "../configs/connectDB";
import printAllUser from "../model/homeModel";
//import connection from "../model/baseModel";

let moveToHomePage = (req, res) => {
    return res.render('redirect.ejs')
}

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs', { dataUser: JSON.stringify(rows) })
}
module.exports = {
    getHomePage, moveToHomePage
}