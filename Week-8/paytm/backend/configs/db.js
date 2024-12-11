const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbURL = process.env.dbURL;
mongoose
  .connect(dbURL)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.error(" DB error occures ", e));

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
});

const User = mongoose.Model(User, UserSchema);

module.exports = { User };
