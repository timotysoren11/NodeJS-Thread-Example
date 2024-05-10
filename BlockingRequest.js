

const fs = require("fs");

console.log("1");
// BLOCKING REQUEST FROM USER 
const result = fs.readFileSync("contacts.text", "utf-8");
console.log(result)

console.log("2");