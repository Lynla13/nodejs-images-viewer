import signinModel from "../model/signinModel";
import followModel from "../model/followModel";

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
                res.send ('Invalid email address or an account already exists!');
            } else {
                req.session.loggedin = true;
                req.session.username = username;
                signinModel.insertUser_Profile (username, password, email);
                return res.render ('sideBar/choicePath.ejs');
            }			
	} else {
		res.send ('Please enter all information!' );
		res.end();
	}
}
//Cho người dùng chọn cách bắt đầu
//Sfw
async function choiceAngel (req,res) {
    let username = req.session.username;
    let showFollows = await followModel.showFollow(username,'akaneko_sfw');
    if (showFollows.length <1){
        followModel.insertFollow(username,'akaneko_sfw');
        followModel.insertFollow(username,'hmtai_sfw');
        followModel.insertFollow(username,'neko');
    }
}

//NSFW
async function choiceDevil (req,res) {
    let username = req.session.username;
    let showFollows = await followModel.showFollow(username,'akaneko');
    if (showFollows.length <1){
        followModel.insertFollow(username,'akaneko');
        followModel.insertFollow(username,'reddit');
        followModel.insertFollow(username,'hmtai_nsfw');
        followModel.insertFollow(username,'neko_nsfw');
    }
}

module.exports = {
    signinAuth,getPage,choiceAngel,choiceDevil
}