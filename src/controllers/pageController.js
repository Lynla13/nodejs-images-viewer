import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
//import connection from "../model/baseModel";

//Tải 1 vài trang sử dụng thông tin từ bảng profile
async function getPage(req, res) {
    let username = req.params.user || req.session.username || '';
    let user = await homeModel.getByUsername(username)
    console.log (user)
    res.render('index.ejs', {user: user , session: req.session.loggedin ? req.session.username: '' });
}

function loadHome(req,res) {
  res.render('moveToHome.ejs');
}

module.exports = {
  getPage,loadHome
} 