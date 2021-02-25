const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/contact');
const route = express();

route.post('/contact', async (req, res) => {
  const { name, email,phone,message } = req.body;
  let user = {};
  user.name = name;
  user.email = email;
  user.phone = phone;
  user.message = message;
  let userModel = new User(user);
  await userModel.save();
  res.json("your contact information has been sended successfully");
});

module.exports = route;