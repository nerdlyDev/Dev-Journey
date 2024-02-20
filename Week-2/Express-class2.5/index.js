// const express = require('express');
// const app = express();

//app.get("/", function(req, res) // req is request and res is response with respect to the client
//{
//    res.send("Hi there !");
//});
//app.listen(3000);


//----------------------------------------------

/* TODO:
You need to create 4 routes (4 things that the hospital can do)
l. GET - User can check how many kidneys they have and their health
2. POST - User can add a new kidney
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney */

//---------------------------------------------


const express = require("express");
const app = express();

const users = [{
  name:"John",
  kidneys:[{
    side:"left",
    health:"good"
  },{
    side:"right",
    health:"bad"
  }]
}]
app.get("/", function(req, res) {
  res.send("Hi there!");
});
app.listen(3000);
