import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";


function loadSigninPage(req, res) {
    let Id = 'signin2';
    pageModel.getPageBy_Id(Id).then(signinPage => {
    return res.render('index.ejs',{Page: signinPage});
      })   
}

module.exports = {
    loadSigninPage
}