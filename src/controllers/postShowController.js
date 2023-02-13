import pageModel from "../model/pageModel";
import postModel from "../model/postModel";
import profileModel from "../model/profileModel";
import followModel from "../model/followModel";
import signinModel from "../model/signinModel";
import likeModel from "../model/likeModel";

const Quotes = require("randomquote-api");
const randomquote = Quotes.randomQuote();
const akaneko = require('akaneko');
const neko = require('nekos-fun')
const RedditImageFetcher = require("reddit-image-fetcher");
const HMtai = require("hmtai");
const hmtai = new HMtai();

let isTagClick = "true";


async function loadPostData(req,res) {
  let username = req.session.username || ''
  let tags ='';
  let Follow = await followModel.showAllFollow(username);
  let result =[];
  //Chuyển object thành array rùi chuyển array thành văn bản bình thường
  for (let i in Follow) {
    let follow = JSON.stringify(Follow[i].following);
    result.push (follow);
  }
  let arrayToSting = result.toString();
  let finalFollowValue = arrayToSting.replaceAll ('"',"'");
  let postData = await postModel.showPostByFollow(finalFollowValue);
  let pageLimit = 9;
  if (postData.length<9) 
  {
    pageLimit=postData.length;
  }
 let maxPage = Math.floor (postData.length/pageLimit-1);
  let pageNum = req.params.page ||'1' ;
  let page = pageLimit*pageNum;
  isTagClick = "false";
  return res.render('postShow.ejs', {maxpage: maxPage, page:page,postTag:tags, isTagClick:isTagClick, session: req.session.loggedin ? req.session.username: '' ,postData:postData}); 
}





async function loadPostBySimilar(req,res) {
  //pagation function
  let tags = req.params.tags ;
  let author = req.body.author;
  let postDataTags = await postModel.showPostBySimilarNoLimit(tags,author);
  let pageLimit = 60;
  if (postDataTags.length<60) 
  {
    pageLimit=postDataTags.length;
  }
  let maxPage = Math.floor (postDataTags.length/pageLimit-1);
  let pageNum = req.params.page ||'1' ;
  let page = pageLimit*pageNum;
  res.render('sideBar/postSimilar.ejs', {maxpage: maxPage, page:page, postTag:tags, isTagClick:isTagClick, session: req.session.loggedin ? req.session.username: '' ,postData:postDataTags}); 
  res.end();
}




//tải bài đăng qua API
async function loadAPIPost (req,res,authorAPI,loadAPI,postTag) {
      let imageName = await loadAPI;
      let postContent =randomquote.quote;
      postModel.insertPostForAPI(authorAPI, postContent,imageName,postTag);
      res.end();
}



async function getPostDetailPage (req,res) {
  let post_id = req.params.postId
  let postData= await postModel.showPostID(post_id);
  let postTagsData = await postModel.showPostTag(postData[0].post_tag);
  let author = await profileModel.getByUsername(postData[0].username);
  return res.render('imgDetail.ejs', {author:author,postData: postData,tagsData:postTagsData,session: req.session.loggedin ? req.session.username: ''}); 
}

async function getPostDetailSideBar (req,res) {
  let post_id = req.params.postId;
  let username = req.session.username ||'';
  let like = await likeModel.showAllLike(post_id);
  let showLikes = await likeModel.showLike(post_id,username);
  let postData= await postModel.showPostID(post_id);
  let author = await profileModel.getByUsername(postData[0].username);
  return res.render('sideBar/detail.ejs', {like :like, showLike:showLikes,author:author,postData: postData, session: req.session.loggedin ? req.session.username: '' }); 
}


async function redditFectAPI (subreddit,number=10) {
  RedditImageFetcher.fetch({
    type: 'custom',
    total: number, 
    addSubreddit: [subreddit],
}).then(result => {
  for (let i in result) {
    let title = result[i].title.replaceAll("'", "`");
    postModel.insertPostForAPI('reddit', title,result[i].image,subreddit);
  }
});
}




async function loadPostOnLoad (req,res) {
  let tagsData = await postModel.showTags();
  for (let j=0; j<10;j++) {
    for (let i in tagsData)
      {
      let akaNekoApi = await postModel.showPostTag(tagsData[i].tags);
      loadAPIPost (req,res,tagsData[i].author, eval(akaNekoApi[0].apiAkaneko),tagsData[i].tags)
      }
    } 
    redditFectAPI ('hentai',25);
}


function deleteFailPics (req,res) {
  let image = req.body.image
  postModel.deletePostbyCondi (image)
}

//Tự tạo người dùng ảo khi duyệt API
async function autoCreateUser (req,res) {
  let username = req.body.username;
  let author = await profileModel.getByUsername(username);
  if (author.length<1) {
    let password = '12345678';
    let email = username+'@gmail.com';
    return signinModel.insertUser_Profile (username, password, email);
  }
  res.end()
}


module.exports = {
  loadPostData,loadAPIPost,getPostDetailPage,loadPostOnLoad,
  getPostDetailSideBar,loadPostBySimilar,deleteFailPics,autoCreateUser 
} 