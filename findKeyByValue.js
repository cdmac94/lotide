const findKeyByValue = function(data, value) {
  let output = "";
  for (let keyName in data) {
    if (data[value] === data.keyName) {
      output = keyName;
    }
  } return output;
};

module.exports = findKeyByValue;
