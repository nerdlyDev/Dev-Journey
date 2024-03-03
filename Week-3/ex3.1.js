// Middlewares, authentication,zod and global catches


// Middlewares: Middleware functions are like checkpoints that sit between the incoming request and your application's final response. They can inspect, modify, or even block requests and responses before they continue to the next stage. Common uses include authentication, logging, and data validation. Middleware makes your code more organized and flexible. 


// Authentication: 

const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;


    if(username != "Devesh" || password != "pass") {// do something with kidney here
        res.status(400).json({"msg":"Something up with your inputs "})
        return
    }
        if (kidneyId != 1 && kidneyId != 2){
            res.status(400).json({"msg":"Something up with your inputs "})
        return  
  } 
  res.json({
    msg: "Your kidney is fine!"
})
});
app.listen(3000);

