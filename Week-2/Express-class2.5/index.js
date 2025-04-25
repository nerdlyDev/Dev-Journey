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

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.use(express.json());
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numbersOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numbersOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numbersOfKidneys - numberOfHealthyKidneys;
  res.json({
    numbersOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
  // console.log(johnKidneys);
});
app.listen(3000);

app.post("/", function (req, res) {
  const isHealthy = req.body.healthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Kidney added",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[0].healthy = true;
  }
  res.json({
    message: "Kidney replaced",
  });
});

app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidenys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        atleastOneUnhealthyKidney = true;
        newKidenys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidenys;
    res.json({
      message: "Kidney removed",
    });
  } else {
    res.json({
      message: "You don't have any unhealthy kidneys",
    });
  }
});
function isThereAtleastOneUnhealthyKidney() {
  let AtleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      AtleastOneUnhealthyKidney = true;
    }
  }
  return AtleastOneUnhealthyKidney;
}
