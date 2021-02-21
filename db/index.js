const mysql = require('mysql');
const db = 'ebay';

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: db
});

connection.connect(() => console.log(`SUCCESS: Connected to ${db} database`));

module.exports = connection;