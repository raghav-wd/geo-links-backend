const express = require("express");

const router = express();

const {
  getAllUserLinks,
  addLink,
  deleteLink,
  editLink,
  getAllUserLinksByUsername,
} = require("../controllers/links.js");
const { verifyToken } = require("../middlewares/auth.js");

router.get("/getAllLinksByUsername", getAllUserLinksByUsername);
router.get("/getAllLinks", verifyToken, getAllUserLinks);
router.post("/addLink", verifyToken, addLink);
router.delete("/deleteLink", verifyToken, deleteLink);
router.put("/editLink", verifyToken, editLink);

module.exports = router;
