const db = require("../db");
const { getId } = require("../utils/getId");

exports.userStyles = (req, res) => {
  const sql = `SELECT themes.type AS themeType, page.color AS pageColor, page.grainy AS pageGrainy, page.backgroundColor AS pageBackgroundColor, page.backgroundImage AS pageBackgroundImage, text.fontFamily AS textFontFamily, text.color AS textColor, button.fill AS buttonFill, button.shadow AS buttonShadow, button.border AS buttonBorder, button.transparency AS buttonTransparency, button.color AS buttonColor FROM page,themes,text,button WHERE themes.user_id=?`;

  db.query(sql, [req.query.user_id], (error, result) => {
    if (error)
      return res
        .status(500)
        .json({ message: "Error while fetching all the styles", error });
    res.json(result[0]);
  });
};

exports.addInitialStyles = (req, res) => {
  const buttonId = getId();
  const pageId = getId();
  const textId = getId();
  const themesId = getId();

  const sql = `BEGIN;INSERT INTO button (_id, user_id, fill, shadow, border, transparency, color) VALUES (?,?,?,?,?,?,?);
                    INSERT INTO page(_id, user_id, color, grainy, backgroundColor, backgroundImage) VALUES (?,?,?,?,?,?);
                    INSERT INTO text(_id, user_id, fontFamily, color) VALUES (?,?,?,?);
                    INSERT INTO themes(_id, user_id, type) VALUES (?,?,?);
              COMMIT;`;

  db.query(
    sql,
    [
      buttonId,
      req.userId,
      req.body.button.fill,
      req.body.button.shadow,
      req.body.button.border,
      req.body.button.transparency,
      req.body.button.color,
      pageId,
      req.userId,
      req.body.page.color,
      req.body.page.grainy,
      req.body.page.backgroundColor,
      req.body.page.backgroundImage,
      textId,
      req.userId,
      req.body.text.fontFamily,
      req.body.text.color,
      themesId,
      req.userId,
      req.body.theme,
    ],
    (error, result) => {
      if (error)
        return res
          .status(500)
          .json({ message: "Error while adding initial styles.", error });
      res.json(result);
    }
  );
};

exports.updateUserStyles = (req, res) => {
  const sql = `BEGIN;
                  UPDATE button SET fill= ?, shadow=?, border=?, transparency=?, color=? WHERE user_id = ?;
                  UPDATE page  SET color=?, grainy=?, backgroundColor=?, backgroundImage=? WHERE user_id = ?;
                  UPDATE text  SET fontFamily=?, color=? WHERE user_id = ?;
                  UPDATE themes  SET type=? WHERE user_id = ?;
              COMMIT;`;

  db.query(
    sql,
    [
      req.body.button.fill,
      req.body.button.shadow,
      req.body.button.border,
      req.body.button.transparency,
      req.body.button.color,
      req.userId,
      req.body.page.color,
      req.body.page.grainy,
      req.body.page.backgroundColor,
      req.body.page.backgroundImage,
      req.userId,
      req.body.text.fontFamily,
      req.body.text.color,
      req.userId,
      req.body.theme,
      req.userId,
    ],
    (error, result) => {
      if (error)
        return res
          .status(500)
          .json({ message: "Error while updating user's styles.", error });
      res.json(result);
    }
  );
};
