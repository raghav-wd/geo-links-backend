const db = require("../db");

exports.getAllUserLinks = (req, res) => {
  const sql = `SELECT _id,url FROM links WHERE user_id=?`;

  db.query(sql, [req.body.user_id], (error, result) => {
    if (error)
      return res
        .status(500)
        .json({ message: "Error while fetching all the links", error });
    res.json(result);
  });
};

exports.addLink = (req, res) => {
  const sql = `INSERT INTO links (user_id,url) VALUES (?,?)`;

  db.query(sql, [req.body.user_id, req.body.url], (error, result) => {
    if (error)
      return res
        .status(500)
        .json({ message: "Error while adding a link", error });
    res.json(result);
  });
};
