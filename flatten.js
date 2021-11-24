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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  
  let result = false;

  if (arrayOne.length !== arrayTwo.length) {
    result = false;
  }
  for (let x = 0, i = 0; i < arrayOne.length; x++, i++) {
    if (arrayOne[x] === arrayTwo[i]) {
      result = true;
    } else {
      result = false;
    }
  }

  if (result === true) {
    console.log(`✅✅✅ Asertation Passed: ${arrayOne}  ===   ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${arrayOne} !== ${arrayTwo}`);
  }

};

const flatten = function(ranArr) {

  let newArr = [];

  for (let x = 0; x < ranArr.length; x++) {
    if (Array.isArray(ranArr[x]) === true) {
      for (let k = 0; k < ranArr[x].length; k++) {
      newArr.push(ranArr[x][k]);
      }
    } else {
      newArr.push(ranArr[x]);
    }
  } return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])