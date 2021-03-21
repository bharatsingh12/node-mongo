const express = require("express");
const userModel = require("../models/user");
const app = express();

// Register
app.post("/register", async (req, res) => {
  const userData = { ...req.body, creation_date: new Date() };
  const user = new userModel(userData);

  try {
    await user.save();

    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Login
app.post("/login", async (req, res) => {
  let statusCode = 500;
  const credentials = req.body || {};

  try {
    const user = await userModel
      .findOne({ email: credentials.email, password: credentials.password })
      .exec();

    res.send(user);
    // }
  } catch (err) {
    res.status(statusCode).send(err);
  }
});

// Update
app.patch("/users/:id", async (req, res) => {
  try {
    const payload = req.body;
    const queryParams = req.params;

    // Find user by id and patch specified data
    await userModel.findByIdAndUpdate(queryParams.id, { age: payload.age });

    // Save user now
    await userModel.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

// List all users
app.get("/users", async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
