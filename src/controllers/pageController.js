import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
//import connection from "../model/baseModel";

//Loading webpage by id
function getPage(req, res) {
    let urlAcess = req.originalUrl;
    console.log(urlAcess);
    let pageId = urlAcess.slice(0,2);
    pageModel.getPageBy_Id(pageId).then(Page => {
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