const { validationResult } = require("express-validator");
exports.getAllBlogs = (req,res,next) => {
    res.json({ status: 200, message:'Get All data'})
    next();
};

exports.createBlog = (req,res,next) => {
    const errors = validationResult(req);

    // Validation Error
    if(!errors.isEmpty()) {
        const err = new Error("Invalide Error")
        err.status = 400;
        err.data = errors.array();
        throw err;
    }


    const result = {
        message: "Has Create A Data",
        data : {
            blog : 1,
            title : req.body.title,
            image : "Image", 
            body : req.body.body,
            create_at : "02-10-2022",
            author : {
                uid : 1,
                name : "Lims"
            },
        },
    };

    res.status(201).json(result);

    next();
};