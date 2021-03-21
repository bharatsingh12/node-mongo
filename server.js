const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const config = {
  port: 3000,
  db: {
    dbName: "user",
    username: "bharat",
    password: "Test@123",
  },
};

const routes = require("./routes/routes.js");

const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(morgan("combined"));

mongoose.connect(
  `mongodb+srv://${config.db.username}:${config.db.password}@cluster0.s0psb.mongodb.net/${config.db.dbName}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

app.use(routes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port} ...`);
});
