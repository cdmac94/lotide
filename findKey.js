const findKey = function(object, callback) {
  
  let output = '';
  for (let i in object) {
    for (let x in object[i]) {
      if (callback(object[i])) {
        output = i;
        return output;
      }
    }
  }
};

module.exports = findKey;
