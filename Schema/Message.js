const { Schema, model } = require("mongoose");

const Message = new Schema({
  title: { type: String, required: true, unique: false },
  user: {type:String, required: true, unique: false},
  date: { type: String, required: true, unique: false},
});

module.exports = model("Message", Message);
