import { Callbacks } from "jquery";
import baseModel from "./baseModel";
//import connection from "../model/baseModel";

let table = 'react';

function showAllLike(post_id) {
    let condi ="post_id = '"+post_id+"' and useful !=''";
    return ( baseModel.getByCondition(table, condi));
}

function showLike (post_id,username) {
    let condi ="post_id = '"+post_id+"'and useful = '"+username+"'";
    return ( baseModel.getByCondition(table, condi));
}

function insertLike(post_id,username)  {
    let tableColums ='post_id,useful' ;
    let values ="'"+post_id+"','"+username+"'";
    return ( baseModel.insertTable(table,tableColums,values));
}

function removeLike(post_id,username)  {
    let condi ="post_id = '"+post_id+"' and useful = '"+username+"'";
    return ( baseModel.deleteCondi (table, condi));
}


//Dislike
function showAllDislike(post_id) {
    let condi ="post_id = '"+post_id+"' and dislike !=''";
    return ( baseModel.getByCondition(table, condi));
}

function showDislike (post_id,username) {
    let condi ="post_id = '"+post_id+"'and dislike = '"+username+"'";
    return ( baseModel.getByCondition(table, condi));
}

function insertDislike(post_id,username)  {
    let tableColums ='post_id,dislike';
    let values ="'"+post_id+"','"+username+"'";
    return ( baseModel.insertTable(table,tableColums,values));
}

function removeDislike(post_id,username)  {
    let condi ="post_id = '"+post_id+"'and dislike = '"+username+"'";
    return ( baseModel.deleteCondi (table, condi));
}

module.exports = {
    insertLike,insertDislike,removeDislike,removeLike,showLike,showDislike,showAllLike,showAllDislike
}