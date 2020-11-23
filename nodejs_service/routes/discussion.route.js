const express = require('express');

const router = express.Router();
const Cdiscussion = require('../controllers/discussion.controller');

// Create
router.route('/create').post((req, res) => {
    console.log('create');
});

// Read
router.route('/get').get((req, res) => {
    console.log('get');
    Cdiscussion.findDiscussion();
});

// Update
router.route('/update').put((req, res) => {
    console.log('update');
});

// Delete
router.route('/delete').delete((req, res) => {
    console.log('delete');
});

module.exports = router;