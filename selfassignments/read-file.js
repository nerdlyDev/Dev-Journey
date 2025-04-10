const fs = require("fs");

const filePath = "/home/devx/Web-Journey/assignments/ex.txt";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});
