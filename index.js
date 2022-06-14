const express = require('express');
const app = express();
const router = express.Router();

router.use("/api", (req,res,next) => {
    res.json({ status: 200, message:'Get All data'})
    next();
})

app.use("/", router);

//  Server 
const ROUTE = 1050
app.listen(ROUTE, ()=> {
    console.log('listening on')    
})