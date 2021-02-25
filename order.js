const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/order');
const route = express();

route.post('/order', async (req, res) => {
  const {order} = req.body;
  let Order = {};
  Order.order = order;
  let userModel = new User(Order);
  await userModel.save();
  res.json("your order has been placed successfully");
});
module.exports = route;