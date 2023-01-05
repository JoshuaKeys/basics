const express = require('express');
const { getQueries } = require('../controllers/query');

const router = express.Router();

router.route('/').get(getQueries)

module.exports = router;