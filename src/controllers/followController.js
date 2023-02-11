import followModel from "../model/followModel";
import profileModel from "../model/profileModel";

async function showAllFollow (req,res) {
    let username = req.session.username || '';
    let Follow = await followModel.showAllFollow(username);
    let profile = await profileModel.getByUsername(username);
    res.render('sideBar/showFollow.ejs', {follow:Follow,profile:profile});
    res.end();
}

async function showFollow(req,res) {
    let username = req.session.username || '';
    let follow = req.body.follow;
    let showFollows = await followModel.showFollow(username,follow);
    if (showFollows.length > 0){
        res.send ('Follow');
    }else 
    {
        res.send ('NoFollow');
    }
    res.end()    
}

async function insertFollow(req,res) {
    let username = req.session.username || '';
    let follow = req.body.follow;
    followModel.insertFollow(username,follow);
    res.end()  
}

async function removeFollow(req,res) {
    let username = req.session.username || '';
    let follow = req.body.follow;
    followModel.removeFollow(username,follow);
    res.end()  
}


module.exports = {
    removeFollow,insertFollow,showFollow,showAllFollow
}