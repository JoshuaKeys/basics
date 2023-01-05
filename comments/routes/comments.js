const router = require('express').Router();
const { getCommentsById, createComment } = require('../controllers/comments');

router.route('/:postId/comments')
  .get(getCommentsById)
  .post(createComment);

module.exports = router;