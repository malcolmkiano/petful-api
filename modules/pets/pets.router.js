const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  return res.json(Pets.get());
});

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.
  if (req.body.type !== "dogs" && reeq.body.type !== "cats") {
    res.status(400, "Please send a valid animal #BirdsArentPets");
  }
  Pets.dequeue(req.body.type);
  res.status(204).end();
});

module.exports = router;
