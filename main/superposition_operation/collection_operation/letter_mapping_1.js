'use strict';
var letters = ["z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

function decTo26(num) {
  var data = [];
  while (num > 0) {
    var mod = num % 26;
    num = Math.floor(num / 26);
    if (mod === 0 && num > 0) {
      num--;
    }
    data.unshift(letters[mod]);
  }
  return data.join("");
}

function even_to_letter(collection) {
  var result = [];
  for (var i of collection) {
    if (i % 2 === 0) {
      result.push(decTo26(i));
    }
  }
  return result;
}

module.exports = even_to_letter;
