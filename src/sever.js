import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./route/web";
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

//setup viewengine
configViewEngine(app);

// init webRouter
initWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})