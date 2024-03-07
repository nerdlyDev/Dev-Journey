// Week- 3.2 Databases and authentication:

// High level understanding of:

// 1. Fetch
// 2. Auth
// 3. Databases



// The fetch API: It is spacial kind of asynchronous function provided by JavaScript or the browser. like setTimeout(), fs.readFile(), fetch(), etc. 
// The fetch API is used to make a network request to a server and then get the response from the server.


// ------------- Authentication -------------

 // Hashing: It is a process of converting a password into a hash value. A hash value is a string of characters that is used to identify the password. It is used to prevent people from guessing the password.

 // Encryption: It is a process of converting a password into a string of characters that is used to identify the password. It is used to prevent people from guessing the password.

 // All this happens backend side. It is an important part of authentication.

 //(JWT) Json web token: It is a  very long string that is used to identify the user. It is used to prevent people from guessing the user. It takes json as a input.

 // Local storage: It is a web storage that is used to store data in the browser. It is used to store data(includes JWT, etc) in the browser.


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "Devesh123@gmail.com",
        password: "pass@1",
        name: "Devesh",
    },
    {
        username: "Rohit123@gmail.com",
        password: "pass@2",
        name: "Rohit",
    },
    {
        username: "Nikhil123@gmail.com",
        password: "pass@3",
        name: "Nikhil",
    },
];

function userExists(username, password){
// Write logic to return true or false if user exists or not
// In ALL_USERS array
// Hard TODO: try to use the find function in js

let userExists = false;
for (let i = 0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
        userExists = true;
    }
}
return userExists;
}

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    
    if(!userExists(username, password)){
        res.status(400).json({
            msg: "User does not exist"
        });
    }
    let token = jwt.sign({username, password}, jwtPassword); // JWT'S sign function
    res.json({
        token
    });
});

app.get("/users", function(req,res) {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword); // JWT's verify function 
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter( function(value){
                if(value.username == username){
                    return false;
                }
                return true;
            }) // filtering out the username from the list of users
        })
    } catch(err){
        return res.status(400).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);
