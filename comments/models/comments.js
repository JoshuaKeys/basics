const { Schema, model } = require('mongoose');

const commentsSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = Comments = model('comment', commentsSchema);