import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
//import connection from "../model/baseModel";

function getHomePage(req, res) {
    let loginId = 'home';
    pageModel.getPageBy_Id(loginId).then(Page => {
    return res.render('index.ejs', {Page: Page, session: req.session.loggedin ? req.session.username: '' }); ;
    return res.send(Page [0].Content) ;
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
  getHomePage,
} 