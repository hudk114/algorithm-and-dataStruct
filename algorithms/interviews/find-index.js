/**
 * 滴滴面试题
 * 在给定的、内部元素可能重复的单调递增子串中通过二分法找到第一个给定值的index，若没有则返回-1
 * 例如: getIndex([0, 0, 3, 3, 6, 6, 8, 10], 3) === 2
 */

function getIndex (arr = [], num = NaN) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('type not right!');
  }

  if (!arr.length) {
    return -1;
  }

  let i = 0,
    j = arr.length - 1,
    k;

  while (i < j - 1) {
    k = Math.floor((i + j) / 2);
    if (arr[k] === num) {
      // 找到了这个值，但是不一定是第一个，所以往左位移一位比较
      k--;
      if (arr[k] !== num) {
        // 是第一个，直接返回
        return k;
      }
      // 不是第一个，继续采用二分法查找
      j = k;
      continue;
    }

    if (arr[k] < num) {
      i = k;
    } else {
      j = k;
    }
  }

  if (i === j) {
    return arr[i] === num ? i : -1;
  }

  // 防止那种0，1一直比较0的状况
  if (i === j - 1) {
    return arr[i] === num ? i : arr[j] === num ? j : -1;
  }
}

console.log(getIndex([], 0));
console.log(getIndex([0, 0, 3, 3, 6, 6, 8, 10], 0));
console.log(getIndex([0, 0, 3, 3, 6, 6, 8, 10], 3));
console.log(getIndex([0, 0, 3, 3, 6, 6, 8, 10], 5));
console.log(getIndex([0, 0, 3, 3, 6, 6, 8, 10], 6));
console.log(getIndex([0, 0, 3, 3, 6, 6, 8, 10], 10));
console.log(getIndex([]));

// ps: 如果要getRightIndex那就把i, j反过来，并在中间判断的时候右移即可
