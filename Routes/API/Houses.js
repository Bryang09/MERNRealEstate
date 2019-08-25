const express = require("express");
const router = express.Router();

const House = require("../../models/House");

// @route GET api/houses
// @desc  GET all houses
router.get("/", (req, res) => {
  House.find().then(houses => res.json(houses));
});

// @route POST api/houses
// @desc  Create a Post
router.post("/", (req, res) => {
  const newHouse = new House({
    name: req.body.name,
    size: req.body.size,
    rooms: req.body.rooms,
    restRooms: req.body.restRooms,
    likes: req.body.likes,
    img: req.body.img
  });

  newHouse.save().then(item => res.json(item));
});

// @route GET api/houses
// @desc  GET all houses

// @route GET api/houses
// @desc  GET all houses

module.exports = router;
