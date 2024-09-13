// ..........................................................................
// Fundamentals of JS
// ..........................................................................

let Fname = "John";
let age = 101;
let isMarried = false;

if(isMarried == true){
console.log("My name is " + Fname + ", I am " + age + " years old. I am married ");
}else{
console.log("My name is " + Fname + ", I am " + age + " years old. I am not married ");
}
console.log("This person name is ");
console.log(Fname);




// ............................................................................
// FOR lOOP IN  JS
// ............................................................................

let ans = 0;
for(let i = 0; i < 10; i++){
    ans = ans + i;
}
console.log(ans);




// ..........................................................................................
// Array in JS
// ....................................................................

let arr = [1,2,3,4,55,6,7,8,9,12];

for(let i = 0; i <= arr.length; i++){
    if(arr[i] % 2 == 0){
    console.log(arr[i]+" is even number");
    }
    if(arr[i] > arr[i+1]){
        var temp = i;
    }
}
console.log(arr[temp]+ " is the largest number");




// ..........................................................................................
// Objects in JS
// ............................................................................ 

const allUsers = [{
    Fname: "John",
    gender: "Male"
},{
    Fname:"Mary",
    gender:"Female"
},{
    Fname:"Mike",
    gender:"Male"
}]

for(let i = 0; i < allUsers.length; i++){
    if(allUsers[i]["gender"] == "Female"){  // Output:  Mary
        console.log(allUsers[i]["Fname"])
    }
}






// ..........................................................................................
// Functions in JS 
// .......................................................

function Sum(a,b){
return a + b;
}

console.log(Sum(2,3));





// ..........................................................................................
// function can take other functions as arguments
// Call backs in JS 
// ............................................................................

function Sum(num1, num2,fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
console.log("Result of the sum is : "+ data);
}

function displayResultPassive(data){
console.log("Sum's result is : "+ data);
}

// calling two functions in one or this the callback function
// const ans = Sum(1,2,displayResult);






// ..........................................................................................
// Functions can return other functions in JS
// ............................................................................

function createMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(10)); // Output: 30





// ..........................................................................................
// Function expressions in JS
// ............................................................................

const myFunction = function(x, y) {
    return x + y;
  };
  
//  Arrow function syntax (shorter for simple functions)
  const add = (x, y) => x + y;
  
// Anonymous function for immediate execution
  (function() {
    console.log("This function runs immediately!");
  })();



//..........................................................................................

//.....................................................................................




//..........................................................................................
// Conditional statements in JS
  id: number;
  name: string;
let a = 2;
let b = "2";
if(a == b){
    console.log("True");  
}else{
    console.log("False");
}   
if(a === b){
    console.log("True");
}
else{
    console.log("False");
}   
