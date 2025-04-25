const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post("/", (req, res) => {
  //app.get('/', (req, res) => {
  //console.log('POST /');
  // console.log(req.headers);
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
