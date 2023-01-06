const express = require('express');
const { getName } = require('../controllers/messenger');

const router = express.Router();

router.route('/name').get(getName)

module.exports = router;