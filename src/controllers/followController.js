import followModel from "../model/followModel";
import profileModel from "../model/profileModel";

async function showAllFollow (req,res) {
    let username = req.session.username || '';
    let Follow = await followModel.showAllFollow(username);
    let profile = await profileModel.getByUsername(username);
    res.render('sideBar/showFollow.ejs', {follow:Follow,profile:profile});
    res.end();
}

async function showFollowCount (req,res) {
    let username = req.body.username;
    console.log (username);
    let Follow = await followModel.showAllFollower(username);
    let followCount = Follow.length
    console.log (followCount)
    res.send({follow:followCount});
    res.end();
}
async function showFollow(req,res) {
    let username = req.session.username || '';
    let follow = req.body.follow;
    let showFollows = await followModel.showFollow(username,follow);
    if (showFollows.length < 1){
        res.send ('NoFollow');
    }else 
    {
        res.send ('Follow');
    }
    res.end()    
}

async function insertFollow(req,res) {
    //Thêm username và người theo dõi
    let username = req.session.username || '';
    let follow = req.body.follow;
    let showFollows = await followModel.showFollow(username,follow);
    if (showFollows.length < 1){
        followModel.insertFollow(username,follow);
        res.send ('follow')
    }else 
    {
        followModel.removeFollow(username,follow);
        res.send ('nofollow')
    }    
    res.end()  
}

async function removeFollow(req,res) {
    let username = req.session.username || '';
    let follow = req.body.follow;
    followModel.removeFollow(username,follow);
    res.end()  
}


module.exports = {
    removeFollow,insertFollow,showFollow,showAllFollow,showFollowCount
}