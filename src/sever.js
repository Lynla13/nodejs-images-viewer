import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./route/web";
import session from "express-session";
import bodyParser from "body-parser";
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

app.use(bodyParser.json({limit: "50mb"}));

app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//setup viewengine
configViewEngine(app);

// init webRouter
initWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})