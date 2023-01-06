import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
//import connection from "../model/baseModel";

function getPage(req, res) {
    let url = req.originalUrl;
    let loginId = url;
    pageModel.getPageBy_Id(loginId).then(Page => {
    return res.render('index.ejs', {Page: Page, session: req.session.loggedin ? req.session.username: '' }); ;
      })   
}
// //Load By AJAX
// function loadPage(req, res) {
//     // let loginId = 'header';
//     pageModel.getAllPage().then(Page => {
//     return res.send(Page [5]. Content) ;
//       })   
// }

module.exports = {
  getPage
} 