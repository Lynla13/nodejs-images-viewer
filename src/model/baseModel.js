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
                console.log(result);
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


module.exports = {
    dbQuery,getAll,getByCondition
}