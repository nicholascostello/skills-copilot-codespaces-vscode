// Create web server

// Import modules
const express = require('express');
const router = express.Router(); 
const commentController = require('../controllers/commentController');

//Handle Requests
router.get('/', commentController.comment_index);
router.post('/', commentController.comment_create_post);
router.get('/create', commentController.comment_create_get);
router.get('/:id', commentController.comment_details);
router.delete('/:id', commentController.comment_delete);

// Export module
module.exports = router;