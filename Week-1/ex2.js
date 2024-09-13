// ---------- JS Fundamentals  -----------

// Common methods and classes provided by JS
// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.



//---------- String HandBook -------------


// 1. length : returns the length of the string
// function getLength(str) {
    // console.log("Original String:", str);
    // console.log("Length:", str.length);
  // }
  // getLength("Hello World"); 



// 2. indexOf : returns the index of the first occurrence of the specified value

// function getIndexOf(str, value) {
    // console.log("Original String:", str);
    // console.log("Value:", value);
    // console.log("Index of", value, ":", str.indexOf(value));
  // }
  // getIndexOf("Hello World", "o");
  // getIndexOf("Hello World World World", "World");



// 3. lastIndexOf : returns the index of the last occurrence of the specified value

// function getLastIndexOf(str, value) {
    // console.log("Original String:", str);
    // console.log("Value:", value);
    // console.log("Last Index of", value, ":", str.lastIndexOf(value));
  // }
  // getLastIndexOf("Hello World", "o");
  // getLastIndexOf("Hello World World World", "World");



// 4. slice : extracts a part of a string and returns the extracted part in a new string

//function getSlice(str, start, end) {
//  console.log("Original String:", str);
//  console.log("After slice:", str.slice(start, end));
//}
//getSlice("Hello World", 0, 5);

// 5. substring : extracts the characters from a string, between two specified indices
// Substring is similar to slice. The difference is that substring cannot accept negative indexes.
// Substring extracts the characters between two specified indices and returns the new sub string.
// Substr is no longer used in modern JavaScript. Instead, we use slice().


// const value = "Hello World";
// let ans = value.substring(2, 5);
// let ans1 = value.substr(2, 5);
// let ans2 = value.slice(2, 5);
// console.log(ans);// llo
// console.log(ans2);// llo
// console.log(ans1);// llo W

// My own implementation
// function CutIt(str, start, end) {
  // let newStr ="";
  // for (let i = 0; i < str.length; i++) {
    // if( i >= start && i < end){
      // newStr = newStr + str[i]; 
    // }
  // }
  // return newStr;
// }
// const value = "Hello World";
// console.log(CutIt(value, 2, 5));// llo





// 6. replace : replaces a specified value with another value in a string


// function replaceString(str, target, replacement) {
  // console.log("Original String:", str);
  // console.log("After replace:", str.replace(target, replacement));
// }
// replaceString("Hello World", "World", "JavaScript");
// If it does not find the target string it will not replace anything and return the original string.
// If the target string is empty, it will replace the first occurrence of the target string with the replacement string.




// 7. split : splits a string into an array of substrings, and returns the new array
// The split() method is used to split a string into an array of substrings, and returns the new array.

// function splitString(str, separator) {
  // console.log("Original String:", str);
  // console.log("After split:", str.split(separator));
// }
// splitString("Hello World", " ");
// splitString("Hello World", "");
// splitString("Hello World", "o");
// splitString("Hello World", ",");



// 8. trim : removes whitespace from both ends of a string
// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

// function trimString(str) {
  // console.log("Original String:", str);
  // console.log("After trim:", str.trim());
// }
// trimString(" Hello World ");
// trimString("Hello World");



// 9. toUpperCase : converts a string to uppercase letters
// The toUpperCase() method converts a string to uppercase letters.

// function toUpper(str) {
  // console.log("Original String:", str);
  // console.log("After toUpperCase:", str.toUpperCase());
// }
// toUpper("Hello World");




// 10. toLowerCase : converts a string to lowercase letters
// The toLowerCase() method converts a string to lowercase letters.

// function toLower(str) {
  // console.log("Original String:", str);
  // console.log("After toLowerCase:", str.toLowerCase());
// }
// toLower("Hello World");




// 11. charAt : returns the character at a specified index (position) in a string
// The charAt() method returns the character at a specified index (position) in a string.

// function getCharAt(str, index) {
  // console.log("Original String:", str);
  // console.log("Character at", index, ":", str.charAt(index));
// }
// getCharAt("Hello World", 0);
// getCharAt("Hello World", 6);








//------------------------ Number Handbook ------------------------------------------------

//1.ParseInt: The parseInt() function parses a string and returns an integer.

function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}
//Example Usage for parseInt
explainParseInt("42"); 
explainParseInt("42px");
explainParseInt("3.14");
// 
// 
//2. ParseFloat: The parseFloat() function parses a string and returns a floating point number.
// 
// function explainParseFloat(value) {
  // console.log("Original Value:", value);
  // let result = parseFloat(value);
  // console.log("After parseFloat:", result);
// }
// 
//Example Usage for parseFloat
// explainParseFloat("3.14");
// explainParseFloat("42");
// explainParseFloat("42px");
// 
// 
// 
//----------------------- Array Handbook ----------------------------------------
// 
//Array:   push(), pop(), shift(), unshift(), splice(), slice(),
//concat(), forEach(), map(), filter(), reduce(), find(), sort()
// 
// 
//1.push(): The push() method adds new items to the end of an array, and returns the new length.
// 
// function pushExample(arr, element) {
  // console.log("Original Array:", arr);
// 
  // arr.push(element);
  // console.log("After push:", arr);
// }
// pushExample([1, 2, 3], 4);
// 
// 
// 
//2.pop(): The pop() method removes the last element from an array, and returns that element.
// 
// function popExample(arr) {
  // console.log("Original Array:", arr);
// 
  // arr.pop();
  // console.log("After pop:", arr);
// }
// popExample([1, 2, 3]);
// 
// 
// 
//3.shift(): The shift() method removes the first element from an array, and returns that element.
// 
// function shiftExample(arr) {
  // console.log("Original Array:", arr);
// 
  // arr.shift();
  // console.log("After shift:", arr);
// }
// shiftExample([1, 2, 3]);
// 
// 
// 
//4.unshift(): The unshift() method adds new items to the beginning of an array, and returns the new length.
// 
// function unshiftExample(arr, element) {
  // console.log("Original Array:", arr);
// 
  // arr.unshift(element);
  // console.log("After unshift:", arr);
// }
// unshiftExample([1, 2, 3], 0);
// 
// 
// 
//5.concat(): The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// 
// function concatExample(arr1, arr2) {
  // console.log("Original Arrays:", arr1, arr2);
// 
  // let arr3 = arr1.concat(arr2);
  // console.log("After concat:", arr3);
// }
// concatExample([1, 2, 3], [4, 5, 6]);
// 
// 
// 
//6.forEach(): The forEach() method calls a function once for each element in an array, in order.
// 
// function forEachExample(arr) {
  // console.log("Original Array:", arr);
// 
  // arr.forEach(function(item, index) {
    // console.log(item, index);
  // });
// }
// forEachExample([1, 2, 3]);
// 
// 
// 
//7. map(): The map() method creates a new array with the results of calling a function for every array element.
// 
// function mapExample(arr) {
  // console.log("Original Array:", arr);
// 
  // let newArr = arr.map(function(item) {
    // return item * 2;
  // });
  // console.log("After map:", newArr);
// }
// mapExample([1, 2, 3]);
// 
// 
// 
//8. filter(): The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// 
// function filterExample(arr) {
  // console.log("Original Array:", arr);
// 
  // let newArr = arr.filter(function(item) {
    // return item > 3;
  // });
  // console.log("After filter:", newArr);
// }
// filterExample([1, 2, 3, 4, 5]);
// 
// 
// 
//9. reduce(): The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right).
// 
// function reduceExample(arr) {
  // console.log("Original Array:", arr);
// 
  // let sum = arr.reduce(function(total, item) {
    // return total + item;
  // });
  // console.log("After reduce:", sum);
// }
// reduceExample([1, 2, 3, 4, 5]);
// 
// 
// 
//10. find(): The find() method returns the value of the first element in an array that pass a test (provided as a function).
// 
// function findExample(arr) {
  // console.log("Original Array:", arr);
// 
  // let found = arr.find(function(item) {
    // return item > 3;
  // });
  // console.log("After find:", found);
// }
// findExample([1, 2, 3, 4, 5]);
// 
// 
// 
//11. sort(): The sort() method sorts the items of an array.
// 
// function sortExample(arr) {
  // console.log("Original Array:", arr);
// 
  // arr.sort(function(a, b) {
    // return a - b;
  // });
  // console.log("After sort:", arr);
// }
// sortExample([5, 2, 3, 4, 1]);








