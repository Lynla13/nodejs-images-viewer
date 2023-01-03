import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
//import connection from "../model/baseModel";

let moveToHomePage = (req, res) => {
    return res.render('redirect.ejs')
}

function getHomePage(req, res) {
    //somting here
    homeModel.getAllUser().then(userData => {
        let username = 'Phu';
        return res.render('home.ejs',{data: userData, user: req.session.loggedin ? req.session.username : 'Khong cos' });
      })
   
}

module.exports = {
    getHomePage, moveToHomePage
} 