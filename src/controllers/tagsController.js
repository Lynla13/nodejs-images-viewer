import postModel from "../model/postModel";
import homeModel from "../model/homeModel";

const Quotes = require("randomquote-api");
const HMtai = require("hmtai");

let isTagClick = "true";


async function loadPostByTag (req,res) {
  //pagation function
  let tags = req.body.tags ;
  let postDataTags = await postModel.showPostByPostTagNoLimit(tags,'desc');  let pageLimit = 6;
  if (postDataTags.length<6) 
  {
    pageLimit=postDataTags.length;
  }
  let maxPage = Math.floor (postDataTags.length/pageLimit-1);
  let pageNum = req.body.page ||'1' ;
  let page = pageLimit*pageNum;
  isTagClick = "true";
  res.render('postShow.ejs', {maxpage: maxPage, page:page, postTag:tags, isTagClick:isTagClick, session: req.session.loggedin ? req.session.username: '' ,postData:postDataTags}); 
  res.end();
}


async function loadTags (req,res) {
  let tagsData = await postModel.showTags();
  return res.render('sideBar/tags.ejs', {tagsData:tagsData, session: req.session.loggedin ? req.session.username: '' }); 
}


async function getPageByTags (req,res) {
      //Lấy thông tin nguòi dùng
      let username = req.session.username || ''
      let user = await homeModel.getByUsername(username)
      return res.render('index.ejs', {user:user,session: req.session.loggedin ? req.session.username: '' }); 
}


module.exports = {
 loadTags,
  loadPostByTag,getPageByTags
} 