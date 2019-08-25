const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  img: [
    {
      type: String
    }
  ],
  rooms: {
    type: Number,
    required: true
  },
  restRooms: {
    type: Number,
    required: true
  },

  likes: {
    type: Number,
    required: true
  }
});

module.exports = House = mongoose.model("house", HouseSchema);
