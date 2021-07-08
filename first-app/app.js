const fs = require("fs");

const files = fs.readdirSync("../");
console.log(files);

fs.readdir("./", (err, result) => {
  if (err) console.log("Error:", err);
  else console.log(result);
});
