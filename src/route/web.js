import express from "express";
import homeController from "../controllers/homeController";
import loginController from "../controllers/loginController";
let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/login', loginController.getLoginPage);
    router.get('/apps', loginController.getLoginPage);
    router.get('/about', (req, res) => {
        res.send('Hello mather');
    })

    return app.use('/', router)
}
export default initWebRouter
