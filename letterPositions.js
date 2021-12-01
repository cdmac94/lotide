const letterPositions = function(sentence) {
  
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let newText = sentence[i];
    if (newText !== " ") {
      if (results[newText]) {
        results[newText].push(i);
      } else {
        results[newText] = [i];
      }
    }
  }
  console.log(results);
};

module.exports = letterPositions;
