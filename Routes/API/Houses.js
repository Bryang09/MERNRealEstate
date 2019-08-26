const express = require("express");
const router = express.Router();

const House = require("../../models/House");

// @route GET api/houses
// @desc  GET all houses
router.get("/", (req, res) => {
  House.find().then(houses => res.json(houses));
});

router.get("/:id", (req, res) => {
  House.findById(req.params.id)
    .then(house => {
      if (!house) {
        return res.status(400).end();
      }
      return res.status(200).json(house);
    })
    .catch(err => console.log(err));
});

// @route POST api/houses
// @desc  Create a Post
router.post("/", (req, res) => {
  const newHouse = new House({
    name: req.body.name,
    price: req.body.price,
    size: req.body.size,
    rooms: req.body.rooms,
    restRooms: req.body.restRooms,
    likes: req.body.likes,
    img: req.body.img,
    yearBulit: req.body.yearBulit
  });

  newHouse.save().then(item => res.json(item));
});

// @route PUT api/houses/:id
// @desc  Update Likes

router.put("/:id", (req, res) => {
  const id = req.params.id;
  House.findById(id, (err, house) => {
    console.log(house.likes);

    house.likes = req.body.likes;
    house
      .save()
      .then(house => res.json(house))
      .catch(err => console.log(err));
  });
});

module.exports = router;
