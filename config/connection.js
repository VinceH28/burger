// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8000,
  user: 'root',
  password: 'Varsity.53',
  database: 'burger_db',
});

// Make connection.
connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });

// Export connection for our ORM to use.
module.exports = connection;