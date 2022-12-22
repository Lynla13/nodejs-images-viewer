import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', (req, res) => {
        res.send('Hello mather');
    })

    return app.use('/', router)
}
export default initWebRouter
