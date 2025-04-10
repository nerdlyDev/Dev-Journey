const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

function generateTodo() {
  const titles = [
    "Buy groceries",
    "Clean the house",
    "Call a friend",
    "Read a book",
    "Write a letter",
  ];
  const title = titles[Math.floor(Math.random() * titles.length)];
  return {
    id: Math.random().toString(36).substring(2, 15), // Generate a random ID
    title,
    done: Math.random() < 0.5, // Randomly set done to true/false
  };
}

app.get("/todos", (req, res) => {
  const todos = [];
  // Generate a configurable number of random todos (e.g., 10)
  for (let i = 0; i < 10; i++) {
    todos.push(generateTodo());
  }
  res.send(todos);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
