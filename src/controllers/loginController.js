import { post } from "jquery";
import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import loginModel from "../model/loginModel";
//import connection from "../model/baseModel";

function getLoginPage(req, res) {
    homeModel.getAllUser().then(userData => {
        console.log(userData); 
        return res.render('index.ejs',{data: userData,user: req.session.loggedin ? req.session.username : 'Khong cos' });
      })   
}

function loadLoginPage(req, res) {
    let loginId = 'login';
    loginModel.getByLoginPageBy_Id(loginId).then(loginPage => {
    return res.render('login.ejs',{loginPage: loginPage});
      })   
}


function LoginAuth(req, res) {
    //somting here
	// Ensure the input fields exists and are not empty
	let username= req.body.username;
    let password= req.body.password;
    if (username && password) {
        loginModel.getByUsername_Pass(username,password).then(loginData => {
                if (loginData.length > 0) {
                    // Authenticate the user
                    req.session.loggedin = true;
                    req.session.username = username;
                    // Redirect to home page
                    res.redirect('/home');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }			
                res.end();
          } )  
	} else {
		res.send(' ' + username +password );
		res.end();
	}
}


module.exports = {
    getLoginPage,LoginAuth,loadLoginPage
}