import { post } from "jquery";
import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import loginModel from "../model/loginModel";
import pageModel from "../model/pageModel";
//import connection from "../model/baseModel";


function getPage(req, res) {
    return res.render('sideBar/login.ejs', {session: req.session.loggedin ? req.session.username: '' }); 
}







//Catch URL 
function LoginAuth(req, res) {
    // Ensure the input fields exists and are not empty
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        loginModel.getByUsername_Pass(username, password).then(loginData => {
            if (loginData.length > 0) {
                // Authenticate the user
                req.session.loggedin = true;
                req.session.username = username;
                // Redirect to home page
                res.send(`<script> 
                        window.location.href ='/'                    
                        </script>`);
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        })
    } else {
        res.send('Please enter all information!');
        res.end();
    }
}
function loadLogout(req, res) {
    req.session.loggedin = false;
    req.session.username = '';
    res.send('<script> window.location.reload() </script>');
    res.end();
}

module.exports = {
    LoginAuth, loadLogout,getPage
}