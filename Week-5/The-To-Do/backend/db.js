const mongo = require("mongoose");

// Not a good practice to connect to MongoDB this, TODO: In the ready app i am going to use it in .env file for this
mongo.connect(
  "mongodb+srv://Admin:WbUxYXjcroJppJrh@cluster.efhd2l0.mongodb.net/todos",
);

const todoSchema = mongo.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongo.model("todos", todoSchema);

module.exports = {
  todo,
};
