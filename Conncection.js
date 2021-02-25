const mongoose = require('mongoose');

const URI ="mongodb+srv://sankit:fG4MxbFEyAWhAEG@website.vn7l4.mongodb.net/test";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;