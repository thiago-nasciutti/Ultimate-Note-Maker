//Requires
const router = require("express").Router();
const path = require("path");

//GET 
router.get("/notes", (req, res) => {
 res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//Export Module
module.exports = router;
