const express = require("express");
const routes = require("./routes/routes.js");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect(
  "mongodb+srv://mateus:mateus@cluster0-p32wr.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("Server running at port 3333");
});

module.exports = app;
