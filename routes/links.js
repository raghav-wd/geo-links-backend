const express = require("express");

const router = express();

const { getAllUserLinks, addLink } = require("../controllers/links.js");

router.get("/getAllLinks", getAllUserLinks);
router.post("/addLink", addLink);

module.exports = router;
