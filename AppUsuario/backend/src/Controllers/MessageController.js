const Message = require("../models/Message");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const messages = await Message.find();

    return res.json(messages);
  },

  async store(req, res) {
    const { message } = req.body;

    const { user_id } = req.headers;

    const data = new Date();

    const date = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear(); // 2 dígitos
    const hour = data.getHours(); // 0-23
    const min = data.getMinutes();
    const realMonth = month + 1;
    const realYear = year % 100;

    const user = await User.findOne({ _id: user_id });

    const messages = await Message.create({
      date: `${date >= 10 ? date : `0` + date}/${
        realMonth >= 10 ? realMonth : `0` + realMonth
      }/${realYear >= 10 ? realYear : `0` + realYear} - ${
        hour >= 10 ? hour : `0` + hour
      }:${min >= 10 ? min : `0` + min}`,
      message: message,
      user: user.name,
    });

    return res.json({ message: "ok" });
  },
};
