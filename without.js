const assertArraysEqual = function(arrayOne, arrayTwo) {
  
  let result = false;

  if (arrayOne.length !== arrayTwo.length) {
    result = false;
  }
  for (let x = 0, i = 0; i < arrayOne.length; x++, i++) {     
      if (arrayOne[x] === arrayTwo[i]){
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


const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let k = 0; k < source.length; k++) {
    if (!itemsToRemove.includes(source[k])) {
      newArray.push(source[k]);
    }
  } console.log(newArray);
};

without([1, 2, 3], [1]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);