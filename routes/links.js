const express = require("express");

const router = express();

const {
  getAllUserLinks,
  addLink,
  deleteLink,
  editLink,
  getAllUserLinksByUsername,
} = require("../controllers/links.js");

router.get("/getAllLinksByUsername", getAllUserLinksByUsername);
router.get("/getAllLinks", getAllUserLinks);
router.post("/addLink", addLink);
router.delete("/deleteLink", deleteLink);
router.put("/editLink", editLink);

module.exports = router;
