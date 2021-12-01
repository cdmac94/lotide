const eqArrays = function(arrayOne, arrayTwo) {
  
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let x = 0, i = 0; i < arrayOne.length; x++, i++) {
    if (arrayOne[x] === arrayTwo[i]) {
      continue;
    } else {
      return false;
    }
  } return true;
};


module.exports = eqArrays;
