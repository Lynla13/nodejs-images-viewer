import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
//import connection from "../model/baseModel";

//Tải 1 vài trang sử dụng thông tin từ bảng profile
function getPage(req, res) {
    let user = req.params.user || req.session.username || '';
    let urlAcess = req.originalUrl;
    let pageId = urlAcess.slice(0,2);
    pageModel.getPageBy_Id(pageId,'lynla').then(Page => {
     res.render('index.ejs', {Page: Page , session: req.session.loggedin ? req.session.username: '' });
   })
}

function loadHome(req,res) {
  res.render('moveToHome.ejs');
}

module.exports = {
  getPage,loadHome
} 