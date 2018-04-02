

function kmp (str, subStr) {
  // TODO 
  var arr = Array.apply(null, new Array(subStr));

  let i = 0;
  let j = 0;

  for (; i < str.length && j < subStr.length;) {
    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else {
      // TODO 回退
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

console.log(kmp('0000000000001', '0000001'));

module.exports = kmp;