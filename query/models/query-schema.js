const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  commentId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const querySchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  comments: {
    type: [commentSchema]
  }
});

module.exports = Query = model('query', querySchema)