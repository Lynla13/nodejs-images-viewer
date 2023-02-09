import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
import signinModel from "../model/signinModel";
import postModel from "../model/postModel";

function getPage(req, res) {
    return res.render('sidebar/signin.ejs', {session: req.session.loggedin ? req.session.username: '' }); 
}



async function signinAuth(req, res) {
    //somting here
	// Ensure the input fields exists and are not empty
	let username= req.body.username;
    let password= req.body.password;
    let email= req.body.email;
    if (username && password && email) {
            let signinData= await  signinModel.getByUsername(username)
            //check if Username is exists
            if (signinData.length > 0) {
                res.send (' Invalid email address or an account already exists!');
            } else {
                req.session.loggedin = true;
                req.session.username = username;
                signinModel.insertUser_Profile (username, password, email);
                res.send(`success`);
            }			
	} else {
		res.send ('Please enter all information!' );
		res.end();
	}
}



module.exports = {
    signinAuth,getPage
}