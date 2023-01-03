import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
//import connection from "../model/baseModel";

function getAppPage(req, res) {

    //somting here
    homeModel.getAllUser().then(userData => {
        console.log(userData); 
        return res.render('apps.ejs',{data: JSON.stringify(userData),user: req.session.loggedin ? req.session.username : 'Khong cos'});
      })
   
}
module.exports = {
    getAppPage
}