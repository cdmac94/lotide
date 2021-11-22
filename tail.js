const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Asertation Passed: ${actual}  ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  var newArray = [array];
  newArray.shift();
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);