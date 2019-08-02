
const util = require('util')
const mysql = require('mysql')

const conn = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password:'1610' ,
  database: 'mytestdb',
  port: 3307
})


console.log("Connection extabilished");
// Promisify for Node.js' async/await.
const query = util.promisify(conn.query).bind(conn);

module.exports = query;
