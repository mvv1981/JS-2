var isValidTime = require('./index.js');

console.info(isValidTime(12, 30)); // true
console.info(isValidTime(12, 61)); // false 