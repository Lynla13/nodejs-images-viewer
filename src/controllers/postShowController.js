import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
import postModel from "../model/postModel";
import profileModel from "../model/profileModel";
//import connection from "../model/baseModel";
const Quotes = require("randomquote-api");
const randomquote = Quotes.randomQuote();
const akaneko = require('akaneko');
const neko = require('nekos-fun')
const RedditImageFetcher = require("reddit-image-fetcher");

let isTagClick = "true";


async function loadPostData(req,res) {
  let tags ='';
  let postDataToPage = await postModel.showPostNoLimit();
  let postData = await postModel.showPost(postDataToPage[0].COUNT,0,'desc');
  let pageLimit = 6;
  if (postData.length<6) 
  {
    pageLimit=postData.length;
  }
  let maxPage = Math.floor (postDataToPage[0].COUNT/pageLimit-1);
  let pageNum = req.params.page ||'1' ;
  let page = pageLimit*pageNum;
  isTagClick = "false";
  return res.render('postShow.ejs', {maxpage: maxPage, page:page,postTag:tags, isTagClick:isTagClick, session: req.session.loggedin ? req.session.username: '' ,postData:postData}); 
}



async function loadPostByTag (req,res) {
  //pagation function
  let tags = req.params.tags ;
  let postDataTags = await postModel.showPostByPostTagNoLimit(tags,'desc');
  let pageLimit = 6;
  if (postDataTags.length<6) 
  {
    pageLimit=postDataTags.length;
  }
  let maxPage = Math.floor (postDataTags.length/pageLimit-1);
  let pageNum = req.params.page ||'1' ;
  let page = pageLimit*pageNum;
  isTagClick = "true";
  res.render('postShow.ejs', {maxpage: maxPage, page:page, postTag:tags, isTagClick:isTagClick, session: req.session.loggedin ? req.session.username: '' ,postData:postDataTags}); 
  res.end();
}



async function loadTags (req,res) {
  let tagsData = await postModel.showTags();
  return res.render('sideBar/tags.ejs', {tagsData:tagsData, session: req.session.loggedin ? req.session.username: '' }); 
}



async function loadAPIPost (req,res,loadAPI,postTag) {
      let imageName = await loadAPI;
      let authorAPI = 'akaneko';
      let postContent =randomquote.quote;
      postModel.insertPostForAPI(authorAPI, postContent,imageName,postTag);
      res.end();
}



async function getPostDetailPage (req,res) {
  let post_id = req.params.postId
  let postData= await postModel.showPostID(post_id);
  let page = await pageModel.getPageBy_Id('/','lynla')
  let author = await profileModel.getByUsername(postData[0].username);
  return res.render('imgDetail.ejs', {Page:page, author:author,postData: postData, session: req.session.loggedin ? req.session.username: '' }); 
}

async function getPostDetailSideBar (req,res) {
  let post_id = req.params.postId
  let postData= await postModel.showPostID(post_id);
  let author = await profileModel.getByUsername(postData[0].username);
  return res.render('sideBar/detail.ejs', {author:author,postData: postData, session: req.session.loggedin ? req.session.username: '' }); 
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
  for (let j=0; j<3;j++) {
    for (let i in tagsData)
      {
      let akaNekoApi = await postModel.showPostTag(tagsData[i].tags);
      loadAPIPost (req,res, eval(akaNekoApi[0].apiAkaneko),tagsData[i].tags)
      }
    } 
    redditFectAPI ('hentai',14);
}




module.exports = {
  loadPostData,loadAPIPost,loadTags,getPostDetailPage,loadPostOnLoad,loadPostByTag,getPostDetailSideBar
} 