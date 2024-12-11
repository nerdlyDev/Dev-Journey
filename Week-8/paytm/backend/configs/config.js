const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.jwt_secret;
module.exports = JWT_SECRET;
