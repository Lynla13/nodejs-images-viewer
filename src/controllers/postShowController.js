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

async function redditFectAPI (subreddit,number=10) {
  RedditImageFetcher.fetch({
    type: 'custom',
    total: number, 
    addSubreddit: [subreddit],
}).then(result => {
  for (let i in result) {
    let title = result[i].title.replace("'", " ")
    postModel.insertPostForAPI('reddit', title,result[i].image,subreddit);
  }
});
}

async function loadPostData(req,res) {
  //pagation function
  //put 12 item per page
  //get page number of page
  let postDataToPage = await postModel.showPostNoLimit();
  let postData = await postModel.showPost(postDataToPage[0].COUNT,0,'desc');
  let pageLimit = 7;
  if (postData.length<7) 
  {
    pageLimit=postData.length;
  }
  let maxPage = Math.floor (postDataToPage[0].COUNT/pageLimit-1);
  //call pageNum from client
  let pageNum = req.params.page ||'1' ;
  let page = pageLimit*pageNum;
  isTagClick = "false";
  //Error handling
  res.write (`<input type="text" id ="max-page" value =`+maxPage+` hidden>`)
  res.write (`<input type="text" id ="is-tag-click" value =`+isTagClick+` hidden>`)
    for (let i=0; i<page-1;i++) {
      printPost(req,res,postData[i].post_id,postData[i].post_tag,postData[i].post_content,postData[i].image)
    }
  res.write (`<style> #loading-img { display:none } </style>`);
  res.end();
}




async function loadPostByTag (req,res) {
  //pagation function
  let tags = req.params.tags ;
  let postTagsLength = await postModel.showPostByPostTagNoLimit(tags,'desc');
  let pageLimit = 96;
  //call pageNum from client
  let pageNum = req.params.page;
  let pageStr = (pageNum*pageLimit);
  let maxPageTags =1;
  if (postTagsLength.length%pageLimit == 0) {
    maxPageTags = postTagsLength.length/pageLimit;
  }
  else {
    maxPageTags = Math.floor (postTagsLength.length/pageLimit)+1;
  }
  if (pageNum ==1) {
    pageNum=1;
    pageStr =0;
  }else {
    pageStr = (pageNum-1)*pageLimit;
    pageNum = req.params.page;
  }
  res.write (`<h2 style ="color: white"> #`+tags+`</h2><hr>`)
  res.write (`<input type="text" id ="max-page" value =`+maxPageTags+` hidden>
              <input type="text" id ="post-tags" value ="`+tags+`" hidden >`)
  let akaNekoApi = await postModel.showPostTag(tags);
   
    let postData = await postModel.showPostByPostTag(tags,pageStr,pageLimit);
    for (let i in postData)
    {
      printPost(req,res,postData[i].post_id,postData[i].post_tag,postData[i].post_content,postData[i].image)
    }

  if (maxPageTags>1)
  {
    for (let i=1;i<=maxPageTags;i++ ){
      res.write (`<p class = "a-fake page-num" id = "`+i+`" onclick = "submitPage(this.id);">`+i+`</p>`);
    }
  }

  res.write (`<style> #loading-img { display:none } </style>`);
  res.end();
}






async function loadTags (req,res) {
  let tagsData = await postModel.showTags();
  for (let i=1; i<=tagsData.length; i++) {
    res.write (` <input type="button" class ="button-profile-more" id ="`+tagsData[i-1].tags+`" 
            style ="display:block; float:left; margin-top:6px; margin-left: 20px;"  onclick = "submitTag(this.id);freeLoad ('/')" value="#`+tagsData[i-1].tags+`">`)
  }
  res.end();
}


async function loadAPIPost (req,res,loadAPI,postTag) {
      res.write (`<style>  #loading-img { display:none } #image-show-out-div { display:block;} </style>`)
      let imageName = await loadAPI;
      let authorAPI = 'akaneko';
      let postContent =randomquote.quote;
      postModel.insertPostForAPI(authorAPI, postContent,imageName,postTag);
      res.end();
}


function deletePost (req,res) {
  let image = req.body.imgName;
  postModel.deletePostbyCondi(image);
  res.end();
}

// make function print  image
async function printPost(req,res,post_id,postTag,postContent,imageName,deletePost=''){
  res.write (`<div class ='imgDetail' id = "imgDetail`+post_id+`"></div>`)
  res.write (`<div id ="image-show-out-div" > 
      <div id = `+post_id+` onclick = 'imgDetail(this.id)'>
      <img temp src ="`+imageName+`" name = "`+imageName+`" id ="image-show-out" onError="this.onerror=null;this.src = '/files/imgs/download.png';`+deletePost+`; 
        "" loading="lazy" />
      <p id ="post_content">`+postContent+` </p>
      </div>
      </div>
      `);
  res.end();
}


async function getPostDetailPage (req,res) {
  let post_id = req.params.postId
  let postData= await postModel.showPostID(post_id);
  let page = await pageModel.getPageBy_Id('/','lynla')
  let author = await profileModel.getByUsername(postData[0].username);
  return res.render('imgDetail.ejs', {Page:page, author:author,postData: postData, session: req.session.loggedin ? req.session.username: '' }); 
}





async function loadPostOnLoad (req,res) {
  let tagsData = await postModel.showTags();
  for (let i in tagsData)
    {
      let akaNekoApi = await postModel.showPostTag(tagsData[i].tags);
     loadAPIPost (req,res, eval(akaNekoApi[0].apiAkaneko),tagsData[i].tags)
    }
  redditFectAPI ('hentai',20)
}


module.exports = {
  loadPostData,loadAPIPost,loadPostByTag,loadTags,deletePost,getPostDetailPage,loadPostOnLoad
} 