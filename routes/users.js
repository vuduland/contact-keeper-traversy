/** @format */

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// HTTP methods:
/*
GET: fetch data from the server
POST: submitting something to the server, filling out form, or adding contact, etc.
PUT: update something that's already on the server
DELETE: delete something from the server
*/

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send(req.body);
});

module.exports = router;
