const express = require("express");
const {
  userStyles,
  addInitialStyles,
  updateUserStyles,
} = require("../controllers/styles");

const router = express();

router.get("/userStyles", userStyles);
router.post("/addInitialStyles", addInitialStyles);
router.put("/updateUserStyles", updateUserStyles);

module.exports = router;
