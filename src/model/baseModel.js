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
async function getAll(table) {
    let result =[];
    return result = await dbQuery('SELECT *from ' +table);
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

module.exports = {
    dbQuery,getAll,getByCondition,insertTwoTable
}