const express = require('express');
const router = express.Router();

const blogController = require('../controller/controller')

// router getAllBlog
router.get('/', blogController.getAllBlogs);

module.exports = router;