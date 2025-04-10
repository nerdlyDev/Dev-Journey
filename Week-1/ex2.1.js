//------------- Classes in JavaScript --------------------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static myType(type) {
    console.log("I am an " + type + " Animal");
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

let Ani = new Animal("Cow", 4);
Ani.speak();
Animal.myType("Mammal");
// Output:
// Cow makes a noise.
// I am an Mammal Animal
console.log(Ani.name);
console.log(Ani.age);
// Output:
// Cow makes a noise.
// 4

// Date class in JavaScript

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();
const currentDate = new Date();
function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
  // }

  // Example Usage for Date Methods
  dateMethods();
  console.log(currentDate.getDate());
  function dateMethods() {
    //   const currentDate = new Date();
    // //   console.log("Current Date:", currentDate);

    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());

    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);

    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);

    // Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());

    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
  }

  // Example Usage for Date Methods
  dateMethods();
  console.log(currentDate.getMonth());
  function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);

    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());

    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);

    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);

    //  Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());

    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
  }

  // Example Usage for Date Methods
  dateMethods();
  console.log(currentDate.getFullYear());

  // SetInterval and SetTimeout in JavaScript

  // SetInterval
  // The setInterval method calls a function or evaluates an expression at specified intervals (in milliseconds).
  // The syntax for setInterval is as follows:
  function sayHello() {
    let a = 1;
    if (a < 10) {
      console.log("Hello");
    }
  }
  setInterval(sayHello, 2);
  // The above code will print "Hello" every 2 seconds.

  //--------------- JSON class in JavaScript ------------------

  // JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.
  // JSON is built on two structures:
  // A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.

  function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);

    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);

    // Stringify JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
  }

  // Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

  jsonMethods(sampleJSONString);

  //------------ Maths class in JavaScript ----------------
  // The Math object allows you to perform mathematical tasks, and includes several properties and methods. Unlike other global objects, Math is not a constructor. All properties and methods of Math are static. You refer to the constant pi as Math.PI and you call the sine function as Math.sin(x), where x is the method's argument. Constants are defined with the full precision of real numbers in JavaScript.
  function mathMethods() {
    //   // Constants
    console.log("Value of PI:", Math.PI);
    console.log("Value of E:", Math.E);

    // Rounding
    console.log("Math.round(4.7):", Math.round(4.7));
    console.log("Math.round(4.4):", Math.round(4.4));

    // Absolute Value
    console.log("Math.abs(-4.7):", Math.abs(-4.7));
    console.log("Math.abs(4.7):", Math.abs(4.7));

    // Power

    console.log("Math.pow(2, 3):", Math.pow(2, 3));
    console.log("Math.pow(3, 2):", Math.pow(3, 2));

    // Square Root
    console.log("Math.sqrt(16):", Math.sqrt(16));
    console.log("Math.sqrt(25):", Math.sqrt(25));

    // Random Number
    console.log("Math.random():", Math.random());
    console.log("Math.random():", Math.random());

    // Trigonometric Functions
    console.log("Math.sin(0):", Math.sin(0));
    console.log("Math.cos(0):", Math.cos(0));
    console.log("Math.tan(0):", Math.tan(0));
  }

  // etc

  //------------Object class in JavaScript ----------------
  // The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

  // Object Methods Explanation
  function objectMethods(obj) {
    console.log("Original Object:", obj);

    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);

    let values = Object.values(obj);
    console.log("After Object.values():", values);

    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);

    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);

    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  }

  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };

  objectMethods(sampleObject);
}
