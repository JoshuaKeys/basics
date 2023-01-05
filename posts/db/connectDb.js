const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to posts DB');
  } catch (err) {
    console.log('Error connecting to DB', err);
    process.exit(1);
  }
}

module.exports = connectDb;