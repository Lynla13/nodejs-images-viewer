import connection from "../configs/connectDB";

// Print all userData
let printAllUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return rows
}

module.exports = printAllUser