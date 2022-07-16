const util = require("util");

let input = "Hi %s, Welcome to Be-practical. %s new batch starts in %d days..!";

let u1 = util.format(input, "Abhishek", "NODEJS", 4)
let u2 = util.format(input, "Shamim", "REACT", 8)
let u3 = util.format(input, "Gopi", "Angular", 12)

console.log(input);
console.log(u1);
console.log(u2);
console.log(u3);