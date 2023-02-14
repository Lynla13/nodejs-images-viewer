import express from "express";
import postShowController from "../controllers/postShowController";
import loginController from "../controllers/loginController";
import appController from "../controllers/appController";
import signinController from "../controllers/signinController";
import profileController from "../controllers/profileController";
import pageController from "../controllers/pageController";
import postController from "../controllers/postController";
import likeController from "../controllers/likeController";
import followController from "../controllers/followController";
import tagsController from "../controllers/tagsController";
import nofiController from "../controllers/nofiController";

let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    router.get('/', pageController.getPage);
    router.get('/page=:page', postShowController.loadPostData);
    //Post
    router.post('/uploadcontent', postController.postContent);
    router.get('/post', postController.getPage);
    router.delete('/deletepost', postController.deletePics);  
    router.post('/post-add', postController.addPost); 
    //Login
    router.get('/l', loginController.getPage);
    router.get('/logout', loginController.loadLogout);
    router.post('/login', loginController.LoginAuth);
    //Signin
    router.get('/s', signinController.getPage);
    router.post('/signin', signinController.signinAuth);
    router.post('/choiceDevil', signinController.choiceDevil);
    router.post('/choiceAngel', signinController.choiceAngel);

    //Apps
    router.get('/apps', pageController.getPage);
    //PageProfile
    router.get ('/p', pageController.getPage);
    router.get ('/p/:user', pageController.getPage);

    router.get ('/postshow/page=:page',postShowController.loadPostData);
    router.get ('/postapi',postShowController.loadAPIPost);
    router.post ('/post/similar:page/:tags',postShowController.loadPostBySimilar);  
    router.post ('/deleteFailPics',postShowController.deleteFailPics);  
    router.post ('/autoCreateUser',postShowController.autoCreateUser);  
    router.get ('/post/:postId',postShowController.getPostDetailPage);  
    router.get ('/postshow/detail/:postId',postShowController.getPostDetailSideBar);  
    router.post ('/post/loadApi',postShowController.loadPostOnLoad);  
    //tags
    router.get ('/tags/:tags',tagsController.getPageByTags);
    router.post ('/post/tags',tagsController.loadPostByTag);
    router.get ('/postshow/tags',tagsController.loadTags);  



    //Like
    router.post ('/showAllLike',likeController.showAllLike)
    router.post ('/insertLike',likeController.insertLike);
    router.post ('/showLikeOnLoad',likeController.showLike);
    //Dislike
    router.post ('/showAllDislike',likeController.showAllDislike)
    router.post ('/insertDislike',likeController.insertDislike);
    router.post ('/removeDislike',likeController.removeDislike);
    router.post ('/showDislikeOnLoad',likeController.showDislike);
    //follow
    router.post ('/showAllFollow',followController.showAllFollow)
    router.post ('/insertFollow',followController.insertFollow);
    router.post ('/removeFollow',followController.removeFollow);
    router.post ('/showFollowOnload',followController.showFollow);
    router.post ('/showFollowCount',followController.showFollowCount);


    

    //Profile
    router.get ('/user/:username',profileController.getPage);
    router.post ('/showUserDetail', profileController.getDetail);
    router.post ('/getUserPost', profileController.showPostByUser);
    router.post ('/showAllFollower',profileController.showAllFollower)
    router.post ('/showAllFollowing',profileController.showAllFollow)

     //Nofi
     router.post ('/showNofi',nofiController.showNofi)
     router.post ('/updateNofi',nofiController.updateNofi)
     router.post ('/showNofiIcon',nofiController.showNofiIcon)
     router.post ('/insertNofi',nofiController.insertNofi)

    return app.use('/', router);
}
export default initWebRouter
