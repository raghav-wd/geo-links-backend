var mysql = require("mysql");

var db = mysql.createConnection({
  host: "mysql-estring.alwaysdata.net",
  user: "estring",
  database: "estring_links",
  password: "L9Z5Xy#ABm*qYFQ",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
