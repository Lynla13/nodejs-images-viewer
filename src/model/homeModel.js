import { Callbacks } from "jquery";
import pool from "../configs/connectDB";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

// * Important promise function
let user = 'user';

 async function getAllUser() {
    return Promise.resolve ( await baseModel.getAll(user));
}
  
module.exports = {
    getAllUser
}