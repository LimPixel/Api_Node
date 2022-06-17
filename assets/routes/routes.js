const express = require('express');
const router = express.Router();
const { body } = require( 'express-validator' );

const blogController = require('../controller/controller')

// router getAllBlog
router.get('/', blogController.getAllBlogs);
router.post(
    '/',
    [ 
        body("title").isLength({min: 3}).withMessage("Need 3 character for load the data "), 
        body("body").isLength({min: 3}).withMessage("Need 3 character for load the data "),
    ],
    blogController.createBlog
);

module.exports = router;