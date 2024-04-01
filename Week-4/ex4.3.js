// Browser ---> Express(Cluster of servers) --->  Database
// Good question to have at this point
// What extra does the http server provide exactly ?
// What extra http server provide exactly? 

// *Databases were are created using protocols that browsers don't understand

// *Databases don't have granual access as a first class citizen. Very hard to do user specific access in them.

// *There are some databases (firebase) that let you get rid of the http server and try their best to provide granola access.

// *Simply means that databases are like a dumb person who either give you the whole access of database with a email & pass or just give you nothing and which frontend can't understand or try to miss use. So that why we need authentication in between them. For example the express server authenticate the frontend request and then give the database access for the specific user.

// *Browsers can't talk to databases directly.

// *There are some exceptions like firebase.

// Databases usually allow access to 4 primitives
// Create Data
// Read Data
// Update Data
// Delete Data
// * Popularly known as CRUD



/* 
* Let's see the API for the mongoose library

*Eventually, we'll be using prisma (which is the industry standard way of doing this)

In mongoose, first you have to define the schema
This sounds counter intuitive since mongodb is schemaless?

That is true, but mongoose makes you define schema for things like autocompletion/Validating data before it goes in the DB to make sure you're doing things right
*Schemaless Dbs can be very dangerous, using schemas in mongo makes it slightly less Dangerous
*/

/*
Mongoose API:

Mongoose offers a rich API for interacting with MongoDB. Here are some key aspects:

Schema Definition: You define Schemas to represent your data structures. Schemas specify the properties (fields) of your documents and their data types. This helps with data validation, autocompletion, and overall code maintainability.

Model Creation: Based on Schemas, you create Models using mongoose.model(). Models act as interfaces for interacting with your data. You use Models to perform CRUD (Create, Read, Update, Delete) operations on your MongoDB collections.

CRUD Operations: Mongoose provides methods for CRUD operations like create(), find(), findByIdAndUpdate(), etc. These methods offer a familiar way to work with your data, similar to relational databases.

Middleware: Mongoose allows defining middleware functions that execute before or after specific operations (e.g., saving or deleting a document). This enables you to implement custom logic like data validation, logging, or pre-processing.

Virtual Types: You can define virtual properties that don't persist in the database but are derived from existing fields. This is useful for calculated fields or computed values.
Schema and Schemaless MongoDB:

It's true that MongoDB itself is schemaless, meaning documents within a collection can have different structures. However, Mongoose introduces schemas to bring some structure and validation to your data. This helps in several ways:

Improved Data Consistency: Schemas enforce data type and validation rules, ensuring your documents adhere to a defined structure. This reduces the risk of storing unexpected data types or invalid values.

Type Safety: Schemas provide type information for your data, making your code more robust and easier to maintain.

IDE Benefits: With schema definitions, IDEs can offer features like code completion and type checking, improving developer experience.

Mongoose vs. Prisma:
*While Mongoose is a popular ODM (Object Data Modeling) library for Node.js with MongoDB, Prisma is a newer alternative gaining traction. Here's a brief comparison:

Mongoose: More established, offers a rich API with features like middleware and virtual types. Requires defining schemas in your application code.

*Prisma: Focuses on type safety and code generation. Generates a type-safe client from your data model definition. May be a better fit for modern development practices.

Conclusion:
Mongoose provides a structured approach to working with MongoDB, even though it's a schemaless database. Schemas bring advantages like data consistency, type safety, and improved developer experience. While Mongoose is a solid choice, Prisma offers a more modern approach with type safety and code generation. Eventually, using Prisma might be a better fit for your project.
*/


// 3 Jargons to know about Mongoose

// Clusters: Mongoose provides a way to connect to multiple MongoDB servers in a cluster. This can be useful for scaling applications. A cluster can have multiple servers and each server can have multiple databases.

//Database: Mongoose provides a way to connect to a specific MongoDB database. This can be useful for separating your application into different parts.

// Schema: Mongoose provides a way to define the structure of your data. This can be useful for data consistency and type safety.

// Tables: Mongoose provides a way to define the structure of your data in a table-like format. This can be useful for data consistency and type safety.

