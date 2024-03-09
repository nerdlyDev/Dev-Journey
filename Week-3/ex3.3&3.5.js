// JWT and Auth Recap and Assignment 

const jwt = require("jsonwebtoken");

// JWT: Json Web Token

// Generate(sign):

const value = {
    name: "Devesh",
    acNo: 12345
}

const token = jwt.sign(value, "secretKey"); // secretekey is the key to verify,
//Only the server sign the  token can verify it with this key.
console.log(token);

// Decode:
// anyone can decode the token and get the value
const decodedValue = jwt.decode(token);
console.log(decodedValue);

// Verify:
// Only the server sign the  token can verify it with this key.
const verifiedValue = jwt.verify(token, "secretKey");
console.log(verifiedValue);

