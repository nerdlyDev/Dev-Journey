const express = require("express");
const z = require("zod");
const { User } = require("../configs/db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../configs/config");

const router = express.Router();

const signupSchema = z.object({
  username: z.string().email(),
  password: z.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req, body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Inputs ",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Incorrect imputs ",
    });
  }

  const user = await User.create(body);
  res.json({
    message: "User created successfully ",
  });

  const userId = user._id;

  const token = jwt.sign(userId, JWT_SECRET);

  res.json({
    message: "User created successfully !!!",
    token: token,
  });
});

module.exports = router;
