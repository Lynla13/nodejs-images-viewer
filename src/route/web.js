import express from "express";
import homeController from "../controllers/homeController";
import loginController from "../controllers/loginController";
let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    let urlPath = "/login";
    function processAjaxData(response, urlPath) {
        document.getElementById("content").innerHTML = response.html;
        document.title = response.pageTitle;
        window.history.pushState({ "html": response.html, "pageTitle": response.pageTitle }, "", urlPath);
    }
    router.get('/', homeController.getHomePage);
    router.get('/login', loginController.getLoginPage);
    router.get('/about', (req, res) => {
        res.send('Hello mather');
    })

    return app.use('/', router)
}
export default initWebRouter
