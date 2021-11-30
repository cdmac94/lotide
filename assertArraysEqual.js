
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  
 let result = eqArrays(arrayOne, arrayTwo);

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


module.exports = assertArraysEqual;


assertArraysEqual(["1", "2", "3", 3], ["1", "2", "3"]);
