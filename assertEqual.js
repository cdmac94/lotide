const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Asertation Passed: ${actual}  ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;
