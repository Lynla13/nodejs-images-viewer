import express from "express";

let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs');
    })

    router.get('/about', (req, res) => {
        res.send('Hello mather');
    })

    return app.use('/', router)
}
export default initWebRouter
