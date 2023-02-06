import express from "express";
import postShowController from "../controllers/postShowController";
import loginController from "../controllers/loginController";
import appController from "../controllers/appController";
import signinController from "../controllers/signinController";
import profileController from "../controllers/profileController";
import pageController from "../controllers/pageController";
import postController from "../controllers/postController";

let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    router.get('/', pageController.getPage);
    //Post
    router.post('/post', postController.postContent);
    router.get('/post', postController.getPage);
    router.delete('/post', postController.deletePics);  
    router.post('/post-add', postController.addPost); 
    //Login
    router.get('/l', loginController.getPage);
    router.get('/logout', loginController.loadLogout);
    router.post('/login', loginController.LoginAuth);
    //Signin
    router.get('/s', signinController.getPage);
    router.post('/signin', signinController.signinAuth);
    //Apps
    router.get('/apps', pageController.getPage);
    //PageProfile
    router.get ('/p', pageController.getPage);
    router.get ('/p/:user', pageController.getPage);

    router.get ('/postshow/page=:page',postShowController.loadPostData);
    router.get ('/postapi',postShowController.loadAPIPost);
    router.get ('/postshow/page=:page/tags=:tags',postShowController.loadPostByTag);  
    router.get ('/postshow/tags',postShowController.loadTags);  
    router.post ('/postshow/image',postShowController.deletePost)
    router.get ('/post/:postId',postShowController.getPostDetailPage);  
    router.post ('/post/loadApi',postShowController.loadPostOnLoad);  
    return app.use('/', router);
}
export default initWebRouter
