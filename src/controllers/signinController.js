import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
import signinModel from "../model/signinModel";


function getPage(req, res) {
    let user = req.params.user || req.session.username || '';
    let urlAcess = req.originalUrl;
    let pageId = urlAcess.slice(0,2);
    pageModel.getPageBy_Id(pageId,user).then(Page => {
    return res.render('index.ejs', {Page: Page, session: req.session.loggedin ? req.session.username: '' }); 
  })   
}





function signinAuth(req, res) {
    //somting here
	// Ensure the input fields exists and are not empty
	let username= req.body.username;
    let password= req.body.password;
    let email= req.body.email;
    if (username && password && email) {
        signinModel.getByUsername (username).then (signinData => {
            //check if Username is exists
            if (signinData.length > 0) {
                res.send (' Invalid email address or an account already exists!');
            } else {
                signinModel.insertUser_Profile (username, password, email);
                res.send (`<p style ="color: green"> Signin Complete! Now login
                <a class ="a-fake" id ="login-show" onclick=" freeLoad ('/l'); " style ="color: lightblue">here</a</p>
                <style>
                .right-side-login input{
                    display: none;
                }
                </style>`);
            }			
        })
        
	} else {
		res.send('Please enter all information!' );
		res.end();
	}
}

module.exports = {
    signinAuth,getPage
}