// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index.js');

assert.equal(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');
assert.equal(isValidTime(-7, 0), false, 'время -7:0 невалидное');
assert.equal(isValidTime(23, 59), true, 'время 23:59 валидное');


console.info('OK!');
