var mysql = require("mysql");

// var db = mysql.createConnection({
//   host: "mysql-estring.alwaysdata.net",
//   user: "estring",
//   database: "estring_links",
//   password: "L9Z5Xy#ABm*qYFQ",
// });

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "estring",
  multipleStatements: true,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
