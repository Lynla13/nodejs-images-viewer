import connection from "../configs/connectDB";


let getHomePage = (req, res) => {
    //login 
    let data = [];
    connection.query(
        'SELECT * FROM `user`',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    username: row.username,
                    pass: row.pass,
                    email: row.email,
                    level: row.level
                })
            });
            console.log('>>>>>>>>>>>>>>>>>>>>> checkData:', typeof (data), JSON.stringify(data));
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        });

}

module.exports = {
    getHomePage
}