// --------------- Middleware recap ------------

const express = require("express");

const app = express();

app.use(express.json());
// Function that returns a boolean if the age of the person is more than 14
// function isOldEnough(age){
//     if( age >= 14){
//         return true;
//     } else {
//         return false;
//     }
// }

// Middleware function
// Checks if the person is old enough As before we were using a function IsOldEnough and some if statements in routes but now we are using middleware and don't need those if statements
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(400).json({
      msg: "Sorry, You are not old enough",
    });
  }
}

// Here we can also use app.use and call the middleware function
// All the routes which after the line of app.use(isOldEnoughMiddleware) will use this middleware

// here we are using two routes ride1 and ride2 in which we can call different middlewares

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  //    if (isOldEnough(req.query.age)){
  res.json({
    msg: "You have successfully ridden the ride 1",
  });
  //    } else {
  res.status(400).json({
    msg: "You are not old enough to ride the ride 1",
  });
  //    }
});
app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  //    if (isOldEnough(req.query.age)){ // We don't need this statements as we are using middleware
  res.json({
    msg: "You have successfully ridden the ride 1",
  });
  //    } else {
  res.status(400).json({
    msg: "You are not old enough to ride the ride 1",
  });
  //    }
});
app.listen(3000);
