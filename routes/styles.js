const express = require("express");
const {
  userStyles,
  addInitialStyles,
  updateUserStyles,
} = require("../controllers/styles");
const { verifyToken } = require("../middlewares/auth");

const router = express();

router.get("/userStyles", userStyles);
router.post("/addInitialStyles", verifyToken, addInitialStyles);
router.put("/updateUserStyles", verifyToken, updateUserStyles);

module.exports = router;
