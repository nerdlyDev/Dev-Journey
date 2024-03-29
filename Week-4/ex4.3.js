// Browser ---> Express(Cluster of servers) --->  Database
// Good question to have at this point
// What extra does the http server provide exactly ?
// What extra http server provide exactly? 

// *Databases were are created using protocols that browsers don't understand
// *Databases don't have granual access as a first class citizen. Very hard to do user specific access in them.
// *There are some databases (firebase) that let you get rid of the http server and try their best to provide granola access.

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



