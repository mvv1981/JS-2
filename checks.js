// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index.js');

assert.equal(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(0, 0), true, 'Время 00:00 валидное.');
assert.equal(isValidTime(23, 59), true, 'Время 23:59 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');
assert.equal(isValidTime(-1, -1), false, 'Время -01:-01 невалидное');
assert.equal(isValidTime(24, 1), false, 'Время 24:01 невалидное');

console.info('OK!');
