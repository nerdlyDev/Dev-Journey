// Async, Await and Promises in JavaScript

// Async Function VS sync function, real use of callbacks
// JS Browser architecture, event loop, call stack, callback queue, event loop
// Promises, Async, Await, Fetch API, Axios, Axios vs Fetch API


// Async Function VS sync function :

// sync function: What does it mean?
// sync function: It means that the function will run in a synchronous way.
// sync function: It means that the function will run in a blocking way.
// sync function: It means that the function will run in a single thread.
// sync function: It means that the function will run in a single call stack.
// Only one thing at a time.

// async function: What does it mean?   
// async function: It means that the function will run in an asynchronous way.
// async function: It means that the function will run in a non-blocking way.
// async function: It means that the function will run in a multi-threaded way.
// async function: It means that the function will run in a multi call stack.
// Multiple things are context switching at a time.


// Lets introduce an asynchronous function in JS
// setTimeout() function is an example of async function in JS
// setTimeout() function is used to call a function after a specified time.function findSumAsync(n){    let sum = 0;    setTimeout(() => {        for (let i = 1; i <= n; i++){            sum += i;        }        console.log(sum);    }, 1000);}console.log(findSumAsync(10));function findSumAsync(n){    let sum = 0;    setTimeout(() => {        for (let i = 1; i <= n; i++){            sum += i;        }        console.log(sum);    }, 1000);}//console.log(findSum(10));console.log(findSumAsync(10));

// function findSum(n){
    // let sum = 0;
    // for (let i = 1; i <= n; i++){
        // sum += i;
    // }
    // return sum;
// }

// function findSumAsync(n){
    // let sum = 0;
    // setTimeout(() => {
        // for (let i = 1; i <= n; i++){
            // sum += i;
        // }
        // console.log(sum);
    // }, 1000);
    // return sum; 
// }

// busy waiting 
// function syncSleep(){
    // let a = 1; 
    // while(a < 1 000000000){
        // a++;
    // }
// }
// 
// syncSleep();
// console.log(findSum(10));
// console.log(findSumAsync(10));
// 


//----------- Async function which JavaScript provides us ------------------

// setTimeout() function is an example of async function in JS
// setTimeout() function is used to call a function after a specified time.

//fs.readFile() function is an example of async function in JS
//fs.readFile() function is used to read a file asynchronously.


//fetch() function is an example of async function in JS
//fetch() function is used to make a network request to a server and then get the response from the server.



//const fs = require('fs');
// filesystem module in node.js
// fs.readFile("/home/devx/Web-Journey/Js-Class1/a.txt", "utf-8", function(err,data){
    // console.log(data);
// } )  // async function
// console.log("This is the last line of the code");


//There are four things at high level in JS that make it asynchronous:
// 1. Call Stack : Call stack is a data structure that records where in the program we are.(What is being called and where it is being called and what will be called next  )
// 2. Web Apis : Web Apis are the APIs provided by the browser, like setTimeout(), fetch(), XMLHttpRequest(), etc that are used to make the JS asynchronous. For example, setTimeout() function is used to call a function after a specified time. Webapis are handled by the browser.
// 3. Callback Queue: Callback Queue is a data structure that records all the callbacks of the async functions.This a queue of all the callbacks of the async functions. Kind of a waiting queue.
// 4. Event Loop: Event Loop is a mechanism that makes the JS asynchronous.It checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the callback queue and pushes it to the call stack. This is how the JS becomes asynchronous.

// CallBacks are real make sense in the context of async functions.

/*What are Callbacks?

Functions passed as arguments to other functions.
Executed when the other function finishes its task, acting as a "call me back when you're done" mechanism.
Crucial for handling asynchronous operations (tasks that take time, like fetching data from a server).
Key Concepts:

Passing the Callback: You provide the callback function as an argument to the asynchronous function.
Executing the Callback: The asynchronous function calls the callback when its task completes, passing any results or errors.
Simple Example:

function greetAfterDelay(name, callback) {
  // Simulate a delay of 2 seconds
  setTimeout(() => {
    console.log("Hello, " + name + "!");
    callback(); // Call the callback function
  }, 2000);
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetAfterDelay("Alice", sayGoodbye); // Pass sayGoodbye as the callback

console.log("This will print first, before the greeting."); */




//---------------- Promises in JavaScript --------------------

// Promises are syntactic sugar for callbacks.That make the code more readable and maintainable.
// Under the hood, Promises are still using callbacks.
// Until now, we have only used other async functions like setTimeout(), fs.readFile(), etc. But what if we want to create our own async function? This is where Promises come in.
// It is just a wrapper on top of another async function, which is fine.
// Usually all async functions we will write, will be a on top of another async function provided by JavaScript or the browser. like setTimeout(), fs.readFile(), fetch(), etc.
// All async functions return a promise.


// Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise of having a value at some point in the future.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
// A Promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people say that a promise is resolved when it is fulfilled or rejected, but to be precise, it is settled if it is not pending.
// Syntax:

// const fs = require('fs');
// 
//my own async function
// function myOwnAsyncFunction(){
    // console.log("This is my own async function");
    // return new Promise(function(resolve){
        // console.log("Inside the promise");
        // fs.readFile("/home/devx/Web-Journey/Js-Class1/a.txt", "utf-8", function(err,data){
            // console.log("before resolve ");
            // resolve(data); // resolve the promise and pass the data to the callback function of then() method. Which is onDone() in this case.
        // } );  // async function 
    // })
// }
// callback function to call the promise
// function onDone(data){
    // console.log(data);
// }
// calling the promise
//myOwnAsyncFunction().then(onDone);  // then() is a method of Promise object. It is used to handle the resolved value of the promise. It takes a callback function as an argument. This callback function will be called when the promise is resolved. The resolved value of the promise will be passed to this callback function as an argument.

// var a = myOwnAsyncFunction();
// console.log(a);  
// a.then(onDone); // Pending promise


//
// Promise is a built-in class in JavaScript. 
// When you are initializing a promise, you are initializing a new instance of the Promise class.
// for using it you have to give the first argument as a callback function which has resolve(name could be anything you want, but it is a convention to use resolve) and reject(name could be anything you want, but it is a convention to use reject) as arguments.
// Example:
// var d = new Promise(function(onDone){
    // setTimeout(function(){
        // onDone("Hello World");
    // },1000)   
// });
// function callback(data){
    // console.log(data);
// }   
// console.log(d);  // Pending promise
// d.then(callback);  // then() is a method of Promise object. It is used to handle the resolved value of the promise. It takes a callback function as an argument. This callback function will be called when the promise is resolved. The resolved value of the promise will be passed to this callback function as an argument. 

// When you designing a promise the goal is do some async work and then call resolve or reject. Async work like reading a file, making a network request,database query, etc.




//----------------- Async Await in JavaScript -------------------

// Again, it is just syntactic sugar for promises/callbacks.

function myAsyncFunction(){
    let p = new Promise(function(resolve){
        // do some async work here
        setTimeout(function(){
            resolve("Hey there !");
        },3000)
});
    return p;
}
// Any function that wants to use await must be async function. Because await can only be used inside an async function.
async function main(){
    // no callbacks , no then() method syntax
    //Rather than using then() method, we use await keyword to wait for the promise to be resolved. 
    let value = await myAsyncFunction(); // await is used to wait for the promise to be resolved. It can only be used inside an async function.
    console.log("Yoo bro !");
    console.log(value); // Promise {<pending>}
}

main();
console.log("This is the last line of the code");

// Again, It is just syntactic sugar for promises/callbacks. Still uses callbacks/Promises under the hood.
// Makes the code more readable and maintainable than callbacks/promises.
// Usually used on the caller side, not on the side where you define an async function.

// Callback, Promise, Async Await all do the same thing but in different ways. They all are used to handle the asynchronous operations in JavaScript and It's on you which one to use and how to use.
// But AsyncAwait is the most readable and maintainable way to handle the asynchronous operations in JavaScript. It is just syntactic sugar for promises/callbacks. It makes the code more readable and maintainable than callbacks/promises. Usually used on the caller side, not on the side where you define an async function.
// AsyncAwait is popular and widely used in the industry. It is the most readable and maintainable way to handle the asynchronous operations in JavaScript. It is just syntactic sugar for promises/callbacks. It makes the code more readable and maintainable than callbacks/promises. Usually used on the caller side, not on the side where you define an async function.