const countLetters = function(text) {
  const count = {};
  for (let i = 0; i < text.length; i++) {

    count[text.charAt(i)] = text.split(text.charAt(i)).length - 1;
  }
  console.log(count);
  return count;
};

module.exports = countLetters;
