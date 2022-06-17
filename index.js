const cors = require('cors')
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());

const routesBlog = require('./asset /routes/routes')
app.use("/api", routesBlog);

// Handle Error
app.use( (error, req, res, next) => {
    const status = error.erorrStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
});

//  Server 
const ROUTE = 1050
const MONGO_ATLAS = "mongodb+srv://Lim:neonjake@cluster0.evvzah4.mongodb.net/apiDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGO_ATLAS)
.then((result) => {
    app.listen(ROUTE, ()=> {
        console.log(`Running on ${ROUTE}`)    
    })
}).catch((err) => {
    console.log('error running on {$ROUTE}', err)
});

