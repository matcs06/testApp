const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { id } = req.params;

    let user = await User.findById(id);

    return res.json(user);
  },

  async execute(req, res) {
    const { name } = req.body;

    let user = await User.findOne({ name });

    if (!user) {
      const user = await User.create({ name });
    }

    req.header = user._id;

    return res.json(user);
  },
};
