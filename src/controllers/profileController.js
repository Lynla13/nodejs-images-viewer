import pool from "../configs/connectDB";
import homeModel from "../model/homeModel";
import pageModel from "../model/pageModel";
import signinModel from "../model/signinModel";

function getProfile (req, res) {
    return res.redirect ('/p/:user');
}


module.exports = {
    getProfile
}