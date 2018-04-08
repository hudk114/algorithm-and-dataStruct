/**
 * next的每项都是该项之前数组的最大相同前后缀
 * @param {Array} arr 传入的arr
 */
const next = arr => {
  arr = typeof arr === 'string' ? arr.split('') : arr;

  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return [-1];
  }
  
  const next = [-1];

  /**
   * 第i个数与之前数值相等，最大匹配值是第i + 1的位置！
   */
  for (let i = 0; i < arr.length - 1; i++) {
    // i的最大匹配为j，也就是0~j-1 === i-j~i-1
    let j = next[i];


    // 如果不等，最大子串肯定还是在原有的子串中
    while (j !== -1 && arr[j] !== arr[i]) {
      j = next[j];
    }

    // 相等，直接加一 
    if (arr[j] === arr[i]) {
      next[i + 1] = j + 1;
    } else {
      // j = -1的情况，说明没有找到匹配
      next[i + 1] = 0;
    }
  }

  return next;
};

console.log(next('abaabcac'));

module.exports = next;