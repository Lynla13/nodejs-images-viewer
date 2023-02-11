import followModel from "../model/followModel";
import profileModel from "../model/profileModel";

async function getPage(req, res) {
    //Lấy thông tin nguòi dùng
    return res.render('profile.ejs', {session: req.session.loggedin ? req.session.username: '' }); 
}

async function showPostByUser (req,res) {
  let username = req.body.username;
  let postByUser = await profileModel.showPostByUser(username);
  let pageLimit = 8;
  if (postByUser.length<8) 
  {
    pageLimit=postByUser.length;
  }
  let maxPage = Math.floor (postByUser.length/pageLimit-1);
  let pageNum = req.body.page ||'1' ;
  let page = pageLimit*pageNum;
  let isTagClick = "profile";
  res.render('profilePost.ejs', {maxpage: maxPage, page:page, postTag:username , isTagClick:isTagClick, session: req.session.loggedin ? req.session.username: '' ,postData:postByUser}); 
  res.end();
}

//hiển thị thông tin chi tiết; 
//Gồm: profile, số lượng follow, following.
async function getDetail (req,res) {
    let username = req.body.username;
    //Lấy thông tin nguòi dùng
    let getProfile = await profileModel.getByUsername(username);
    //Lấy danh sách nhứng ngưới mà user theo dõi
    let getFollowing = await followModel.showAllFollow(username);
    //Lấy danh sách những nhưới theo dõi user
    let getFollower = await followModel.showAllFollower(username);
    //Trả về giao diện
    return  res.render('sideBar/profileDetail.ejs', {getFollowing: getFollowing.length, getFollower:getFollower.length, getProfile:getProfile, session: req.session.loggedin ? req.session.username: '' }); 
}

async function showAllFollow (req,res) {
  let username = req.body.username;
  let getFollowing = await followModel.showAllFollow(username);
  let pageLimit = 50;
  if (getFollowing.length<50) {
    pageLimit = getFollowing.length;
  }
  res.render('sideBar/showFollowerUser.ejs', {pageLimit:pageLimit,getFollow: getFollowing});
  res.end();
}

async function showAllFollower (req,res) {
  let username = req.body.username;
  let getFollower = await followModel.showAllFollower(username);
  let pageLimit = 50;
  if (getFollower.length<50) {
    pageLimit = getFollower.length;
  }
  res.render('sideBar/showFollowUser.ejs', {pageLimit:pageLimit, getFollow: getFollower});
  res.end();
}

module.exports = {
    getPage,showPostByUser,getDetail,showAllFollow,showAllFollower
}