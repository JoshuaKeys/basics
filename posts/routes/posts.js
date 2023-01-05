const express = require('express');
const { getPosts, createPost } = require('../controllers/posts');
const router = express.Router();

router.route('/').get(getPosts).post(createPost)

module.exports = router;