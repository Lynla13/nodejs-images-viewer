import { Callbacks } from "jquery";
import pool from "../configs/connectDB";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

// * Important promise function
let users = 'profile';

 async function getAllUser() {
    return Promise.resolve ( await baseModel.getAll(users));
}
  
module.exports = {
    getAllUser
}