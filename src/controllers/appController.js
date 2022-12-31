import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
//import connection from "../model/baseModel";

function getAppPage(req, res) {

    //somting here
    homeModel.getAllUser().then(userData => {
        console.log(userData); 
        return res.render('index.ejs',{data: JSON.stringify(userData)});
      })
   
}
module.exports = {
    getAppPage
}