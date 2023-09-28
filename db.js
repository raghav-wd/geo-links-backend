var mysql = require("mysql");

// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "geo-links"
// });

var db = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12649713",
  password: "ZxUy1z7lrX",
  database: "sql12649713",
  post: 3306,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
