import express from "express";
import homeController from "../controllers/homeController";
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
    router.post('/post', postController.postContent);
    router.get('/post', postController.getPage);
    router.delete('/post', postController.deletePics);  
    router.get('/l', loginController.getPage);
    router.get('/logout', loginController.loadLogout);
    router.post('/login', loginController.LoginAuth);
    router.get('/s', signinController.getPage);
    router.post('/signin', signinController.signinAuth);
    router.get('/apps', pageController.getPage);
    router.get ('/p', pageController.getPage);
    router.get ('/p/:user', pageController.getPage);
    return app.use('/', router);
}
export default initWebRouter
