const express = require("express");
const userModel = require("../models/user");
const app = express();

// Register
app.post("/register", async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();

    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Login
app.post("/login", async (req, res) => {
  const credentials = req.body;

  try {
    const user = await userModel
      .findOne({ name: credentials?.name, password: credentials?.password })
      .exec();

    if (!user || !user._id) {
      throw new Error("Wrong username or password!");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
app.patch("/users/:id", async (req, res) => {
  try {
    const payload = req?.body;
    const queryParams = req?.params;

    // Find user by id and patch specified data
    await userModel.findByIdAndUpdate(queryParams?.id, { age: payload?.age });

    // Save user now
    await userModel.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/users", async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
