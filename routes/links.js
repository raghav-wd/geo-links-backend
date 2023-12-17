const express = require("express");

const router = express();

const {
  getAllUserLinks,
  addLink,
  deleteLink,
  editLink,
} = require("../controllers/links.js");

router.get("/getAllLinks", getAllUserLinks);
router.post("/addLink", addLink);
router.delete("/deleteLink", deleteLink);
router.put("/editLink", editLink);

module.exports = router;
