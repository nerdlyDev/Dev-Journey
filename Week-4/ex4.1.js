// DOM introduction: 

// How backend and frontend communicate

// Communicating to the frontend at iodex.html using fetch  
// TODO >>>>>>> SUM Backend Server <<<<<<<<<<<

const express = require("express");
const cors = require('cors');  // using to give us access to all origins OF servers in browser
// cors is a middleware which allows us to use it in our server
// * To encounter this : 
/*The error message you're encountering indicates a CORS (Cross-Origin Resource Sharing) issue. Here's a breakdown:

The Problem:

You're trying to use fetch (a JavaScript function) to access a resource (http://localhost:3000/sum?a=5&b=8) from a different origin (null). In this case, the origin is likely null because you're probably running some JavaScript code directly in the browser (e.g., an HTML file opened locally) that's trying to fetch data from a separate server (http://localhost:3000).
The browser is blocking this request due to CORS security restrictions. By default, browsers prevent websites from making requests to different domains unless the server hosting the resource explicitly allows it. */
const app = express();

app.use(express.json());
app. use(cors()); // Allows all origins of server for development 

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);    
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send("The sum is " + sum);
} );


app.get("/interest", function(req, res){
    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);
    const interest = (p*r*t)/100;
    const total = p + interest;
    res.send({
        total: total,
        interest: interest
    })
});

app.listen(3000);