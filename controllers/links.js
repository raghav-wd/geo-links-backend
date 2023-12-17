const db = require("../db");
const { getId } = require("../utils/getId");

exports.getAllUserLinks = (req, res) => {
  const sql = `SELECT _id,url_title,url,url_type FROM links WHERE user_id=?`;

  db.query(sql, [req.query.user_id], (error, result) => {
    if (error)
      return res
        .status(500)
        .json({ message: "Error while fetching all the links", error });
    res.json(result);
  });
};

exports.addLink = (req, res) => {
  const linkId = getId();
  const sql = `INSERT INTO links (_id,user_id,url_title,url,url_type) VALUES (?,?,?,?,?)`;

  db.query(
    sql,
    [
      linkId,
      req.body.user_id,
      req.body.url_title,
      req.body.url,
      req.body.url_type,
    ],
    (error, result) => {
      if (error)
        return res
          .status(500)
          .json({ message: "Error while adding a link", error });
      res.json(result);
    }
  );
};

exports.deleteLink = (req, res) => {
  const sql = `DELETE FROM links WHERE _id=?`;

  db.query(sql, [req.query.link_id], (error, result) => {
    if (error)
      return res
        .status(500)
        .json({ message: "Error while deleting a link", error });
    res.json(result);
  });
};

exports.editLink = (req, res) => {
  let sql = `UPDATE links SET `;
  const bodyList = [];
  for (const key in req.body) {
    if (key !== "link_id") {
      sql += `${key}=?,`;
      bodyList.push(req.body[key]);
    }
  }
  sql = sql.slice(0, -1);
  sql += ` WHERE _id=?`;
  bodyList.push(req.body.link_id);
  db.query(sql, bodyList, (error, result) => {
    if (error)
      return res
        .status(500)
        .json({ message: "Error while editting a link", error });
    res.json(result);
  });
};
