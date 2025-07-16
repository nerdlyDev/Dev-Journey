// function greet(firstname: string, lastName: string, age: number) {
//   console.log("Hello " + firstname + lastName + " " + age);
// }

// greet("Dev", "Sh", 23);

// a sum function returning number
// function sum(a: number, b: number, c: number): number {
//   return a + b + c;
// }

// console.log(sum(1, 2, 3));

// function IsLegal(age: number): boolean {
//   return age > 18;
// }

// console.log(IsLegal(0));

//after 1 sec

// function runAfter1Sec(fn: () => void) {
//   // here we are setting the function argument of function type which have no arguments and returns nothing
//   setTimeout(fn, 1000);
// }

// runAfter1Sec(function () {
//   console.log("Hello after 1 sec");
// });

// const doSomething: (a: number) => void = (a) => {
//   console.log("hello");
// };

// ------------- Interfaces ---------------------
// Interfaces lets you aggregate data.
//* How can you assign types to objects? for example, a user that looks like this */

const user = {
  firstName: "Dev",
  lastName: "Sh",
  email: "nerdType@gmail.com",
  age: 23,
};

// * to assign a type to the user object, you can use interfaces

interface User {
  firstName: string;
  lastName?: string; // here by adding ? we make this field optional, user can skip to give the lastName
  email: string;
  age: number;
}

// * Here is an example if where we need to check a user is legal or not, if we don't use Interface and create a type for objects we need to rewrite the object properties

function isItLegal(user: {
  firstName2: string;
  lastName2: string;
  email2: string;
  age2: number;
}) {
  if (user.age2 > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isItLegal({
    firstName2: "Nerd",
    lastName2: "Sh",
    email2: "scam@gmail.com",
    age2: 34,
  }),
);

// * Here is how we should do it with the help of interfaces User interface. Interface lets you combine multiple fields in a simple type.

function isItReallyLegal(user: User) {
  if (user.age > 18) {
    console.log("hey" + "" + user.firstName + "" + user.lastName);
  } else {
    console.log("error");
  }
}

// * We can implement the interfaces in a class same as we can in java.But but but we can not implement **types** in a class.

interface Person {
  name: string;
  age?: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string; // Declaring name property for all the objects of the employee class.
  age?: number; // optional property

  constructor(name: string, age: number) {
    // the declared properties needs to be initialized or it will give error.
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const e = new Employee("Dev", 23);
console.log(e.name); // if name is a property associate with employee class, It needs to be declared in the class.
e.greet("Ram Ram ji");

// *----------------------------------------- Types in TypeScript ---------------------------------------------------
// Very similar to interfaces, types let you aggregate data together. But have some extra feature over interfaces like - Unions, Intersections,
// We need to put = when creating a type. Not in interfaces

type Users = {
  firstName: string;
  lastName: string;
  age: number;
};

// *-------------------- Unions --------------------

// Lets say you want to print the id of a user, which can be a number or a string or any other dataType. You can not do this using interfaces but types lets you do this

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("BC69"); // ID: BC69

// *-------------------------- Intersection ----------------------------------
//What if you want to create a type that has every property of multiple types/interfaces . You can not do this using interfaces but types lets you do this.

type Employees = {
  // this can also be a interface or a type
  name: string;
  StartDate: Date;
};

interface Manager {
  // this can also be a interface or a type
  name: string;
  department: string;
}

type teamLead = Employees & Manager; // teamLead is a type which have Employees and Manager type. Or simply says it have all the properties of both types.

const tl: teamLead = {
  name: "Nerd",
  StartDate: new Date(),
  department: "IT",
};

function printTL(tl: teamLead): void {
  console.log(tl.name, tl.department, tl.StartDate);
}

printTL(tl);

//When to use which, interfaces vs types in TS or what is the difference between interfaces and types.

//* We can implement a interface into a class.

//* We can use intersection and(&), union or(|) with types where we need to work with multiple types.

//* -------------------------- Arrays in TS --------------------------------

type NumberArr = number[];
// interface x number[]; // we can see another difference between a type and a interface. We can create a custom datatype over the array but we can not do this with the interface.

function maxValue(arr: NumberArr): number {
  // created a function that takes array of numberArr type (which is an array of number datatype) as an argument and return number.
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 3, 5, 7, 9]));

// Given a list of users, Filter out the users that are legal (greater than 18 years of age)

interface SomeUsers {
  firstName: string;
  lastName: string;
  age: number;
}

function filterUsers(users: SomeUsers[]): boolean {
  if (users.length > 0 && users[0].age > 18) {
    return true;
  }
  return false;
}

console.log(
  filterUsers([
    {
      firstName: "Funny",
      lastName: "Singh",
      age: 18,
    },
  ]),
);

//* ------------------------ Enums -------------------------------

//Enums (enumerations) in TypeScript are a feature that allows you to define a set of named constants.

// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

//* Example :
// Let's say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, Down arrow key, left arrow key or right arrow key.

type keyPress = "left" | "right" | "up" | "down"; // one way of doing this is by declaring our own type.

// Here we are using enumeration enum to declare named constants for doing the same as we were using type above but it is much more readable.
enum Direction {
  Left, // 0 ts compiler internally assign them constant values or we can also do the same by self like Left = 2 or let = "anything"
  Right, // 1
  Up, // 2
  Down, // 3
}
function doSomething(keyPressed: Direction) {
  if (keyPressed === Direction.Left) {
    console.log("moving left");
  } else if (keyPressed === Direction.Right) {
    console.log("moving right");
  } else if (keyPressed === Direction.Down) {
    console.log("Moving down");
  } else {
    console.log("Moving Up");
  }
}

doSomething(Direction.Left);
doSomething(Direction.Right);
console.log(Direction.Left);
console.log(Direction.Right);

//* One of the common use cases of enums is in express.

// const app = express();

// enum ResponseStatus {
//   Success = 200,
//   NotFound = 404,
//   Error = 500,
// }

// app.get("/", (req, res) => {
//   if (!req.query.userId) {
//     res.status(404).json({});
//   }
//   // and so on ..........
//   res.status(200).json({});
// });

//* -------------------- Generics ---------------------------------

//Generics are a language independent concept (exist in CPP as well) let's learn it via an example.

//Lets say you have a function that needs to return the first element of an array, Array can be of type either string or integer.

// One way of doing this is
type Input = number | string;

function firstEl(arr: Input[]) {
  return arr[0];
}

const value = firstEl(["Dev", "Nerd"]);
console.log(value);
//console.log(value.toUpperCase()); //! will get errors or warning here

//* The reason is that the firstEl function is designed to handle arrays of either numbers or strings (Input[]). While it can correctly return the first element, the type of the returned value (value) is still string | number, meaning TypeScript can't be sure if it's a string or a number at compile time because TypeScript can not run the code as it just transpile the code into JavaScript.

//* The toUpperCase() method is specific to strings. If value happens to be a number, calling  toUpperCase() on it would lead to a runtime error. TypeScript prevents this potential error by flagging it during compilation.

//* To fix this, you would need to add a type check to ensure that value is indeed a string before calling toUpperCase() like this :

type Input1 = number | string;

function firstEl1(arr: Input1[]) {
  return arr[0];
}

const value1 = firstEl1(["Dev", "Nerd"]);
console.log(value1);

if (typeof value1 === "string") {
  console.log(value1.toUpperCase());
} else {
  console.log("The first element is not a string");
}

//* We want TS compiler to know that the array vlaue1 holds which kind of data for example number or string and so that we can perform that data type related functions.

//* -------- Else we can use Generics here ---------------
// Generics are a perfect solution for this kind of scenarios !!!

//* Generics enable you to create components that work with any data type while still providing compile-time type safety.

function firstEle<T>(arr: T[]): T | undefined {
  return arr[0];
}
// <T> is a generic which we use when We don't know the datatype during definition which can be anything.

const stringValue = firstEle(["Dev", "Nerd"]); // stringValue is of type string, or we can also be specific to the type like this :
const stringValue2 = firstEle<string>(["Develop", "NeoNerd"]);

console.log(stringValue?.toUpperCase()); // Now safe to use toUpperCase()

const numberValue = firstEle([10, 20]); // numberValue is of type number
console.log(numberValue);

// Generic Type Parameter: We introduce a generic type parameter T in the function signature: firstEle<T>(arr: T[]). This T represents any type.

// Type Inference: When you call firstEle(["Dev", "Nerd"]), TypeScript infers that T should be string because the array contains strings. Similarly, when you call firstEle([10, 20]), T is inferred as number.

// Return Type:  The function's return type is also T | undefined. This means the function will return the same type as the elements in the array or undefined if the array is empty.

// Type Safety:  Now, stringValue is correctly inferred as string, so you can safely use toUpperCase() without any type errors. numberValue is correctly inferred as number.

//* ----------------------------- Better way of doing Import and Export files ---------------------------------
// Till now I was using this JS format which old
//const express = require("express");

// But but but we have a better way of doing import or export like this

//* import express from "express";

//Export like this

export default function multi(x: number, y: number): number {
  return x * y;
} // when importing in another file we don't need to destructure it. Just import it like this: import multi from "./taste.ts"

export function add(x: number, y: number): number {
  return x + y;
} // When importing in another file we need to destructure it like this : import {add} from "./taste.ts"

// To install express when using typescript we use "npm i express @types/express" this command
