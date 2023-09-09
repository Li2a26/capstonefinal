//db.js
require("dotenv").config();

const { createPool } = require("mysql2");
// Create connection variable
const connection = createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPwd,
  port: process.env.dbPort,
  database: process.env.dbName,
  multipleStatements: true,
  waitForConnections: true, 
  queueLimit: 0,
  connectionLimit: 100,
});

connection.getConnection((error) =>{
  if(error){
      console.log(error);
  } else{
      console.log("Database connected successfully");
  }
})

module.exports = connection;