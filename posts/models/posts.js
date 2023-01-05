const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  }
})

const postModel = model('post', postSchema);

module.exports = postModel;