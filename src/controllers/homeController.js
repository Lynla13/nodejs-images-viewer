import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
//import connection from "../model/baseModel";

let moveToHomePage = (req, res) => {
    return res.render('redirect.ejs')
}

function getHomePage(req, res) {

    //somting here
    homeModel.getAllUser().then(userData => {
        return res.render('index.ejs',{data: userData});
      })
   
}

module.exports = {
    getHomePage, moveToHomePage
} 