//--------Map,filter,arrow functions------

// 1.------- Arrow functions---------: 
// Arrow functions allow us to write shorter function syntax.

// Difference between Functions and Arrow functions:

// 1. Arrow functions do not have their own this. They are not well suited for defining object methods.
// 2. Arrow functions are not hoisted. They must be defined before they are used.
// 3. Arrow functions cannot be used as constructors and will throw an error when used with new.
// 4. Arrow functions do not have arguments. Use rest parameters instead.
// 5. Arrow functions cannot be called with new.
// 6. Arrow functions do not have a prototype property.
// 7. Arrow functions cannot be used as generators.


function sum(a,b){ // simple function 
    return a+b;
}

const sum = (a,b) => a+b; // Arrow function 



// 2.-------------- Map--------------------:

// map: is a method that creates a new array with the results of calling a provided function on every element in the calling array.


// given an array, give me back a new array in which every value is multiplied by 2

const arr = [1,2,3,4,5];
const newArr = arr.map((value) => value*2); // using arrow function

const ans = arr.map(function(value){ // using simple function
    return value*2;
});

console.log(newArr); // [2,4,6,8,10]    





// 3.-------------- Filter-----------------:

// filter: is a method that creates a new array with all elements that pass the test implemented by the provided function.

// given an array, give me back a new array in which every value is even 

const arr1 = [1,2,3,4,5];
const newArr1 = arr.filter((value) => value%2 === 0); // using arrow function    

const ans1 = arr.filter(function(value){ // using simple function
    return value%2 === 0;  
});

console.log(newArr1); // [2,4]


// ----------  startswith  ---------

// The startsWith() method determines whether a string begins with the characters of a specified string.

console.log('hello'.startsWith('h')); // true





// -----------------Git & Github --------------

// GIT: A free and open-source version control system.

// Version Control System:

// A system that keeps track of our files or projects.

// It allows you to revert selected files to a previous state, revert the entire project to a previous state, compare changes over time, see who last modified something so that we can know what might be causing a problem, or what is the issue, who made it, and when with the details.

// Centralized version control & Distributed version control


// Why git : Free, Open-source, Scalable, Super fast, Cheap branching and merging 


//Github: A web based hosting service for git repositories.

// Local Repo: Git provides a private workplace as a working copy. Developers make changes to their private repo.

// Pull, Push 

// Blobs : binary large object. Each version of a file is represented by blob. A blob holds the file data but doesn't contain any metadata about the file. It is a binary file, and in Git database, it is named as SHA1 hash of that file in Git.


// Trees: Tree is an object, which represents a directory, It holds blobs as well as other sub directories. A tree is a binary file that stores references to blobs and trees which are also named as SHA1 hash of the tree object.


// Commits: It holds the current state of the repo. A commit is also named by SHA1 hash.

//Commit object = a node of the linked list.

//Every commit object has a pointer to the parent commit object.

//From a given commit, you can traverse back by looking at the parent pointer to view the history of the commit.

//If a commit has multiple parent commits, then that particular commit has been created by merging two branches.


//--------------- Git Commands ---------------

// Clone: Bring a repo hosted somewhere like github into a folder or your local machine.

// Add: Track your files and changes in git.

// Commit: Save your files in git.

// Push: Upload your commits to a git repo, like github.

// Push: Download changes from  remote repo to your local repo.



