module.exports = tail;

const tail = function(array) {
  var newArray = [array];
  newArray.shift();
  return newArray;
};
