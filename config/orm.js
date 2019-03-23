const connection = require("../config/connection.js");

function printQuestionMarks(num)    {
    const arr = [];
    for (let i = 0; i < num; i++)   {
        arr.push("?");
    };
    return arr.toString();
};

function objToSql(ob)   {
    const arr = [];

    for (let key in ob) {
        let value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push = key + "=" + value; 
        };           
    };
return arr.toString();
};

const orm = {
    selectAll: function(tableInput, cb)   {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err)    {
                throw err;
            };
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb)   {
        let queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += col.toString();
        queryString += "( ";
        queryString += "VALUES ("
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, val, function(err, result)   {
            if (err)    {
                throw err;
            };
            cb(result);
        });
    },
    updateOne: function(table, objColVal, condition, cb)   {
        let queryString = "UPDATE" + table;

        querystring += "SET";
        querystring += objToSql(objColVal);
        querystring += "WHERE";
        querystring += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err)    {
                throw err;
            };
            cb(result);
        });
    }
};    

module.exports = orm;