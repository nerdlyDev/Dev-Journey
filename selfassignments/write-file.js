const fs = require("fs");
const filePath = "/home/devx/Web-Journey/assignments/ex.txt";

const data = "This is some text to write to the file.";

// Write the file asynchronously
fs.writeFile(filePath, data, "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully!");
  }
});
