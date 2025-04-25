const fs = require("fs");

// Path to the file
const filePath = "/home/devx/Web-Journey/assignments/ex.txt";

// Function to remove extra spaces
function removeExtraSpaces(text) {
  return text.trim().replace(/\s+/g, " ");
}

// Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    // Remove extra spaces from the content
    const modifiedData = removeExtraSpaces(data);

    // Write the modified content back to the file
    fs.writeFile(filePath, modifiedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File modified successfully!");
      }
    });
  }
});
