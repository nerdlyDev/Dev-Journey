// // JWT and Auth Recap and Assignment 

// const jwt = require("jsonwebtoken");

// // JWT: Json Web Token

// // Generate(sign):

// const value = {
//     name: "Devesh",
//     acNo: 12345
// }

// const token = jwt.sign(value, "secretKey"); // secretekey is the key to verify,
// //Only the server sign the  token can verify it with this key.
// console.log(token);

// // Decode:
// // anyone can decode the token and get the value
// const decodedValue = jwt.decode(token);
// console.log(decodedValue);

// // Verify:
// // Only the server sign the  token can verify it with this key.
// const verifiedValue = jwt.verify(token, "secretKey");
// console.log(verifiedValue);




// ----------  DOM --------------

// Stands for Document Object Model

// A standard for how to get, change, add, or delete HTML elements.

// JavaScript makes the HTML page active and dynamic via the DOM.

/*
What is DOM?

* A programming interface for web documents.
* DOM is not a programming language.
* Represents the page so that programs can change the document structure, style, and content.
* The DOM is a tree-like representation of the web page that gets loaded into the browser.
* The DOM represents the document as nodes and objects.
* Without it, the JavaScript language wouldn't have any model or notion of webpages, HTML documents, SVG documents, and their component parts.
* Web API used to build websites

* Accessing the DOM
 When you create a script, whether inline in a <script> element or included in the webpage, you can immediately begin using the API for the document or window objects to manipulate the document itself.

 The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API

 DOM functions are used to manipulate the document:
 HTML: 

 Get
 Set
 Add
 Remove

 getElementById
 getElementsByTagName
 getElementsByClassName

 setAttribute
 removeAttribute

 For CSS: 

 querySelector
 querySelectorAll

HTML object collections:
getElementsByClassName
getElementsByTagName these methods return a live HTMLCollection.

document.anchors
document.images
document.forms
document.links
document.scripts

NodeList:
document.querySelectorAll() return a static NodeList
 
Changing HTML Elements:

innerHTML
innerText
setAttribute

Replacing HTML Elements:

replaceChild
replaceWith

The node methods:
node.childNodes
node.parentNode
node.nextSibling
node.previousSibling
node.firstChild
node.lastChild
node.previousElementSibling
node.nextElementSibling
node.firstElementChild
node.lastElementChild


DOM Events:

addEventListener
removeEventListener


Onload and Onunload functions:

onerror
onblur
onclick
onmouseover
onmouseout
onmousemove
onmousedown
onmouseup
onkeydown
onkeyup
onkeypress
onchange
onsubmit
onfocus

onload
onunload


Event Bubbling and Event Capturing:

Two ways of event propagation in the DOM.

Bubbling
Capturing
*/



// 1.Generating(sign) JWT
// 2.Decoding JWT
// 3.Verifying JWT

// The backend who generated the JWT can only verify the JWT
// Everyone can decode the JWT

//const jwt = require("jsonwebtoken");

/*const value = {
    name: "Devesh",
    acNo: 12345
}

// jwt
//const token = jwt.sign(value, "secretKey");
//console.log(token);
// This token has been generated using this secretKey, and hence this token can only be verified using this secretKey

const varifiedToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGV2ZXNoIiwiYWNObyI6MTIzNDUsImlhdCI6MTcxMDg3NjgyMH0.R7ByaNiNB6eSVKdARKS6p0xZbeWC0GPBkW3RcNcuoPU","secret");
console.log(varifiedToken);
// While the secretkey is the same, the token can be verified using the same secretkey
*/


//------------ Try catch in JS ---------------

// The try block lets you define a block of code to be tested for errors.
// The catch block lets you handle the error.
// The finally block lets you execute code, after try and catch, regardless of the result.


try {
     let a;
     console.log(a.length);
     console.log("I am inside try block");
} catch(e){
    console.log("I am inside catch block");
}
console.log("I am outside try and catch block");



