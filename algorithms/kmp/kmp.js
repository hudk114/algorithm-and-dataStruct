const { kmpNext } = require('./next');

function simple (str, subStr, pos) {
  let i = pos;
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

function kmp (str, subStr, pos) {
  // const n = next(subStr);
  const n = kmpNext(subStr);

  let i = pos;
  let j = 0;
  for (; i < str.length && j < subStr.length;) {
    if (j === -1 || str[i] === subStr[j]) {
      i++;
      j++;
    } else {
      j = n[j];
    }
  }

  if (j === subStr.length) {
    return i - j;
  }
  return -1;
}

// console.log(kmp('abbaaaabaabcacasdfasdf', 'abaabcac', 0));

module.exports = {
  simple,
  kmp
};
