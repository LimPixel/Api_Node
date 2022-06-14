exports.getAllBlogs = (req,res,next) => {
    res.json({ status: 200, message:'Get All data'})
    next();
};