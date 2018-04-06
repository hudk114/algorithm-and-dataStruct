/**
 * 八皇后问题
 */
var { deepClone } = require('../../utils');

// 计算在pos处放queen后的新数组
var getCArr = function(pos, array) {
  var a = deepClone(array);
  a.forEach((item, y) => {
    item.forEach((i, x, arr) => {
      if (
        x === pos[0] ||
        Math.abs(x - pos[0]) === Math.abs(y - pos[1])
      ) {
        if (arr[x] === 0) {
          arr[x] = 1;
        }
      }
      if (x === pos[0] && y === pos[1]) {
        arr[x] = 2;
      }
    });
  });

  return a;
};

// 第index行的所有可能性
var listInLine = function(index, array, number) {
  // if (index === number) {
  //   console.log(array);
  //   return 1;
  // }

  // get available
  var available = array[index]
    .map((item, index) => (item === 0 ? index : false))
    .filter(item => item !== false);

  if (index === number - 1) {
    // last line
    return available.length;
  }

  if (available.length === 0) {
    // no available pos
    return 0;
  }

  return available.reduce((prev, current) => {
    return (
      prev + listInLine(index + 1, getCArr([current, index], array), number)
    );
  }, 0);
};

var queen = function(number) {
  var arr = [];
  var brr = [];
  for (var i = 0; i < number; i++) {
    brr = [];
    for (var j = 0; j < number; j++) {
      brr[j] = 0;
    }
    arr[i] = brr;
  }

  return listInLine(0, arr, number);
};

// console.log(queen(4));

module.exports = queen;
