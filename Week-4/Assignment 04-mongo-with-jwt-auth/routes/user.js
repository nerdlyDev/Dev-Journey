const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists in the database
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Create the user
  const newUser = new User({ username, password });
  await newUser.save();

  // Generate a token
  const token = jwt.sign({ username }, JWT_SECRET);

  // Send the response
  res.json({ token });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match a user in the database
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate a token
  const token = jwt.sign({ username }, JWT_SECRET);

  // Send the response
  res.json({ token });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  // Add logic to fetch and return all courses
  const courses = []; // Replace with actual course fetching logic
  res.json({ courses });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  const username = req.username;

  // Add logic to handle course purchase
  res.json({ message: `Purchased course ${courseId}` });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;

  // Add logic to fetch and return purchased courses for the user
  const purchasedCourses = []; // Replace with actual purchased courses fetching logic
  res.json({ purchasedCourses });
});

module.exports = router;
