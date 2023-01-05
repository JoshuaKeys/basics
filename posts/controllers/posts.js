const { asyncHandler, rabbitWrapper } = require("@giantsoftnats/common");
const PostCreatedPublisher = require("../events/publishers/post-created-publisher");
const Posts = require('../models/posts');

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Posts.find({});
  res.status(200).send(posts);
})
exports.createPost = asyncHandler(async (req, res, next) => {
  const { title } = req.body;

  const newPost = new Posts({title});

  await newPost.save();

  new PostCreatedPublisher(rabbitWrapper.client).publish(JSON.stringify(newPost))

  res.status(201).send(newPost);
});