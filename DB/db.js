const mysql = require('mysql2/promise');


const config = {
  local : {
    host: process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    connectionLimit : 30
  },
  development : {
    host : process.env.DV_HOST,
    user : process.env.DV_USER,
    password : process.env.DV_PASSWORD,
    database : process.env.DV_DATABASE,
    connectionLimit : 30
  },
}
const pool = mysql.createPool(config.development);


module.exports = pool;
