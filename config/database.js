
const util = require('util')
const mysql = require('mysql')

const conn = mysql.createConnection({
  connectionLimit: 10,
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b4aa30cfec8d83',
  password:'a48a193c' ,
  database: 'heroku_058ddfaa6496caf',
  port: 3307
})


console.log("Connection extabilished");
// Promisify for Node.js' async/await.
const query = util.promisify(conn.query).bind(conn);

module.exports = query;
