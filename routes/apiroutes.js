//Requires
const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

//GET Notes
router.get("/notes", (req, res) => {
 res.json(db);
});

//POST New Note
router.post("/notes", (req, res) => {
 db.push(req.body);
 fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
  return err;
 });
 res.json(db);
});

//DELETE Note
router.delete("/notes/:id", (req, res) => {
 db.splice(req.params.id - 1, 1);
 fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
  return err;
 });
 res.json(db);
});

//Export Module
module.exports = router;
