const mongoose = require('mongoose');

exports.connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to Comments DB');
  } catch (err) {
   console.log('Could not connect to the comments DB', err);
   process.exit(1); 
  }
}