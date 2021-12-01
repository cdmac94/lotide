module.exports = tail;

const tail = function(array) {
  var newArray = [array];
  newArray.shift();
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
