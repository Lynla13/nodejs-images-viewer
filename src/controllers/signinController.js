import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
import signinModel from "../model/signinModel";


function loadSigninPage(req, res) {
    let Id = 'signin';
    pageModel.getPageBy_Id(Id).then(signinPage => {
    return res.render('signin.ejs',{signinPage: signinPage, session: req.session.loggedin ? req.session.username: ''});
    return res.send(signinPage [0]. Content) ;
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
                req.session.loggedin = true;
                req.session.username = username;
                res.send ('<script> window.location.reload() </script>');
            }			
        })
        
	} else {
		res.send('Please enter all information!' );
		res.end();
	}
}

module.exports = {
    loadSigninPage,signinAuth
}