const express = require('express');
const app = express();
const router = express.Router();

const routesBlog = require('./asset /routes/routes')
app.use("/api", routesBlog);

//  Server 
const ROUTE = 1050
app.listen(ROUTE, ()=> {
    console.log('listening on')    
})