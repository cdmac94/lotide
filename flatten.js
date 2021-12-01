const flatten = function(ranArr) {

  let newArr = [];

  for (let x = 0; x < ranArr.length; x++) {
    if (Array.isArray(ranArr[x]) === true) {
      for (let k = 0; k < ranArr[x].length; k++) {

        newArr.push(ranArr[x][k]);

      newArr.push(ranArr[x][k]);

      }
    } else {
      newArr.push(ranArr[x]);
    }
  } return newArr;

};

module.exports = flatten;
