import express from "express";
import homeController from "../controllers/homeController";
import loginController from "../controllers/loginController";
import appController from "../controllers/appController";
import signinController from "../controllers/signinController";
import profileController from "../controllers/profileController";
import pageController from "../controllers/pageController";

let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    router.get('/', pageController.getPage);
    router.get('/h', pageController.getPage);
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
