// Middlewares, authentication,zod and global catches


// Middlewares: Middleware functions are like checkpoints that sit between the incoming request and your application's final response. They can inspect, modify, or even block requests and responses before they continue to the next stage. Common uses include authentication, logging, and data validation. Middleware makes your code more organized and flexible.  


// Dumb way of doing Authentication check: 
/*
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
*/

// Smart way: using middleware functions

// app.use() middleware: 
/*## Simple Notes on Middlewares and `app.use`

**Middlewares:**

- Act as "middlemen" in your Node.js application.
- Intercept and process incoming requests before reaching routes.
- Perform various tasks like logging, authentication, data modification, etc.

**`app.use`:**

- Attaches middlewares to the Express.js application.
- Applies the middleware to **all** incoming requests by default.
- Think of it as the "instruction board" assigning tasks to middlewares.

**Key Points:**

- Call `next()` in a middleware to allow the request to continue to the next middleware or route handler.
- Order of `app.use` matters, as middlewares are executed in the order they are attached.
- While not directly attached to routes, global middlewares (attached with `app.use`) handle all requests unless specified otherwise.

** We can also directly use the middlewares functions and call them but app.use make it more seamless and connected

** We can also use middlewares as async function 
*/



// const express = require('express');
// const app = express();

// // Middleware 1: Logs request info
// app.use((req, res, next) => {
//   console.log(`[REQUEST] ${req.method} ${req.url}`);
//   next();
// });

// // Middleware 2: Checks for authorization (simulated)
// app.use((req, res, next) => {
//   if (!req.headers.authorization) {
//     res.status(401).send('Unauthorized');
//   } else {
//     // Pretend to check for a specific token
//     if (req.headers.authorization === 'secret-token') {
//       next();
//     } else {
//       res.status(403).send('Forbidden');
//     }
//   }
// });

// // Middleware 3: Modifies response headers
// app.use((req, res, next) => {
//   res.setHeader('X-Powered-By', 'My Custom App');
//   next();
// });

// // Route handler
// app.get('/data', (req, res) => {
//   res.json({ message: 'This is the data!' });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });



// Input validations:

/* 
//Unsecure way of doing things with out validation

const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function(req, res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send("you have" + kidneyLength + " kidneys");
});
// global catches: It is a spacial kind of middleware which takes four arguments(err,req,res,next)  ( Error-Handling Middlewares ) which helps you give the user a better error message. 
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something is wrong with the server"
    })
})
app.listen(3000);
*/


// --------- ZOD -------------

// ZOD is a input validation libraries.Which provides ton of ways(functions) for validations. 

// const express = require("express");
// const z = require("zod")
// const app = express();

// const schema = zod.array(zod.number());

// {
// email: string => email
// password: atleast 8 letters 
// country: "IN", "US"
// }

// const schema2 = z.object({
//     email:z.string(),
//     password: z.string(),
//     country: z.literal("IN").or(z.literal("US")),
//     kidneys:z.array(z.number())
// })
// app.use(express.json());

// app.post("/health-checkup", function(req, res){
//     // kidneys = [1,2]
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)
//     if (!response.success){
//         res.status(411).json({
//             msg: "Input is invalid"
//         })
//     } else {
//     res.send({
//         response
//     })
//     }
// });

// app.listen(3000);


