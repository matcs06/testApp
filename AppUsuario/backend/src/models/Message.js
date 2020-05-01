const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  date: String,
  message: String,

  user: String,
});

module.exports = mongoose.model("Message", MessageSchema);
