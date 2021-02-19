// Import MySQL connection.
const connection = require('./connection.js');

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
  const arr = [];

  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }

      arr.push(`${key}=${value}`);
    }
  }

  return arr.toString();
};

