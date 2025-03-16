const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbURL = process.env.dbURL;
mongoose
  .connect(dbURL)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.error(" DB error occurs ", e));

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 16,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.types.ObjectId,
    ref: "User",
    required: true,
  },

  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", UserSchema);

module.exports = { User, Account };
