/** @format */

const express = require('express');
const router = express.Router();

// HTTP methods:
/*
GET: fetch data from the server
POST: submitting something to the server, filling out form, or adding contact, etc.
PUT: update something that's already on the server
DELETE: delete something from the server
*/

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get a logged in user');
});

// @route   POST api/auth --> same URL as above: ok because we are using different HTTP methods
// @desc    Auth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
