const db = require("../db");

exports.signup = (req, res) => {
  const sql = `INSERT INTO users (username,email,password) VALUES (?,?,?)`;

  db.query(
    sql,
    [req.body.username, req.body.email, req.body.password],
    (error, result) => {
      if (error)
        return res
          .status(500)
          .json({ message: "Error while signing up", error });
      res.json(result);
    }
  );
};

exports.login = (req, res) => {
  const sql = `SELECT username,email FROM users WHERE email=? AND password=?`;

  db.query(sql, [req.body.email, req.body.password], (error, result) => {
    if (error)
      return res.status(500).json({ message: "Error while loging in", error });
    if (result.length) res.json(result[0]);
    else res.json({ message: "Wrong credentials" });
  });
};
