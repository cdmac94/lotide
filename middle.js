const middle = function(array) {

  let newArr = [];
  let midIn = Math.ceil(array.length / 2);

  if (array.length === 1 || array.length === 2) {
    newArr = [];
  } else if (array.length > 2) {

    if (array.length % 2 !== 0) {
      newArr.push(array[midIn - 1]);
    if (array.length % 2 === 0) {
      newArr.push(array[midIn]);
    } else {
      newArr.push(array[midIn - 1], array[midIn]);
    }
  } return newArr;
};

module.exports = middle;
