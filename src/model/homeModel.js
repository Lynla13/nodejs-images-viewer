import { Callbacks } from "jquery";
import pool from "../configs/connectDB";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

// * Important promise function
let users = 'profile';

 async function getAllUser() {
    return Promise.resolve ( await baseModel.getAll(users));
}

async function getByUsername(username)  {
    let condition = 'username = "' + username + '"';
    return Promise.resolve ( await baseModel.getByCondition('users',condition));
}
  
module.exports = {
    getAllUser,getByUsername
}