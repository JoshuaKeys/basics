const { asyncHandler, rabbitWrapper } = require("@giantsoftnats/common");
const CommentCreatedublisher = require("../events/publishers/comment-created-publisher");
const Comments = require("../models/comments");

exports.getCommentsById = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const comments = await Comments.find({postId});

  res.status(200).json(comments);
});

exports.createComment = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const { content } = req.body;

  const newComment = new Comments({
    postId,
    content
  })
  await newComment.save();

  new CommentCreatedublisher(rabbitWrapper.client).publish(JSON.stringify(newComment));
  
  res.status(201).send(newComment);

})