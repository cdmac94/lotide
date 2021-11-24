const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Asertation Passed: ${actual}  ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo){
  
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }     
  for (let x = 0, i = 0; i < arrayOne.length; x++, i++){     
      if (arrayOne[x] === arrayTwo[i]){
        continue;
      } else {
        return false
      }
    } return true
} 


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true ) 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true ) 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false ) 
