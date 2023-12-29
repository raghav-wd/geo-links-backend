const db = require("../db");
const { getId } = require("../utils/getId");

exports.signup = (req, res) => {
  const auth_id = getId();
  const user_id = getId();

  const sql = `BEGIN;INSERT INTO auth (_id,email,password) VALUES (?,?,?);INSERT INTO user (_id,auth_id) VALUES (?,?);COMMIT;`;

  db.query(
    sql,
    [auth_id, req.body.email, req.body.password, user_id, auth_id],
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
  const sql = `SELECT _id,email FROM auth WHERE email=? AND password=?`;

  db.query(sql, [req.body.email, req.body.password], (error, result) => {
    if (error)
      return res.status(500).json({ message: "Error while logging in", error });
    if (result.length) res.json(result[0]);
    else res.status(401).json({ message: "Wrong credentials" });
  });
};
