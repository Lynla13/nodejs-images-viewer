import { Callbacks } from "jquery";
import pool from "../configs/connectDB";
//import connection from "../model/baseModel";

// * Important promise function
function dbQuery(databaseQuery) {
    return new Promise(data => {
        pool.query(databaseQuery, function (error, result) { // change db->connection for your code
            if (error) {
                console.log(error);
                throw error;
            }
            try {
                data(result);

            } catch (error) {
                data({});
                throw error;
            }

        });
    });

}
async function getAll(table,orderBy,limit=8,offset=1) {
    let result =[];
    return result = await dbQuery('SELECT *from ' +table+' ORDER BY '+orderBy+' limit '+limit+' OFFSET '+offset+'');
}

async function getAllNoLimit(table) {
    let result =[];
    return result = await dbQuery('SELECT *from ' +table+'');
}
//get all with no limit
async function getCount(countColunm,table) {
    let result =[];
    return result = await dbQuery('SELECT COUNT('+countColunm+') as COUNT FROM ' +table+'');
}

async function getByCondition(table,condition) {
    let result =[];
    return result = await dbQuery('SELECT * FROM '+ table +' WHERE '+ condition +'');
}
//Fuction insert two tables in the same time
 function insertTwoTable(table1,table2,values1,username) {
   pool.query ('INSERT INTO '+table1+' (username, pass, email, level)  VALUES ('+values1+')');
   pool.query ('INSERT INTO '+table2+' (username,fullname, birth_day, profile_ava, profile_bkg)  VALUES ('+username+',"unknow","00/00/0000","unknown.jpg","")');    
}

//post and page_id
function NaturalJoin3 (selectValue,tb1,tb2,tb3,condition){
    pool.query (`SELECT `+selectValue+` FROM `+tb1+` a NATURAL join `+tb2+` b NATURAL join `+tb3+` c `+condition+``)
}
//Fuction insert one Table
function insertTable(table1,tableContent,values1) {
    pool.query ('INSERT IGNORE INTO '+table1+' ('+tableContent+')  VALUES ('+values1+')');
 }

//delete function 
 function deleteCondi (table, condi) {
    pool.query ('DELETE FROM '+table+' WHERE '+condi+'')
    
 }



module.exports = {
    dbQuery,getAll,getByCondition,insertTwoTable,insertTable,NaturalJoin3,getCount,getAllNoLimit,deleteCondi
}