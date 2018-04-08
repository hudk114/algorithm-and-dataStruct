const next = require('./next');

function simple (str, subStr) {
  var arr = Array.apply(null, new Array(subStr));

  let i = 0;
  let j = 0;

  for (; i < str.length && j < subStr.length;) {
    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else {
      // 回退
      i -= j;
      j = 0;
      i++;
    }
  }

  if (j === subStr.length) {
    return i - j;
  }
  return -1;
}

function kmp (str, subStr) {
  var arr = Array.apply(null, new Array(subStr));
  // next每一位使得N 0 ~ N i-1 === N j-i ~ N j-1 && N i !== N j 的最大i值
  const next = next(arr);

  let i = 0;
  let j = 0;
  for (; i < str.length && j < subStr.length;) {
    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else {
      let max = arrF[j];
      let back = j - max;
      j -= back;
    }
  }

  if (j === subStr.length) {
    return i - j;
  }
  return -1;
}

// console.log(kmp('0000000000001', '0000001'));
// console.log(times);
console.log(next('ababaaababaa'.split('')));

module.exports = kmp;