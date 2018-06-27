/**
 * 头条面试题
 * 在给定的、未排序、内部不重复的数组中获取N个数使其和为M
 * 例如: childArraySum([1, 2, 7, 6, 4, 3], 3, 14) 输出 [1, 6, 7]
 */

/**
 * 判断有效性
 * 如果前n个的和都达不到sum的话，说明无效
 */
function judgeValid (arr, n, sum) {
  if (arr.length < n) {
    return false;
  }

  let s = 0;
  for (let i = 0; i < n; i++) {
    s += arr[i];
  }

  if (sum > s) {
    return false;
  }

  return true;
}

function getSum (arr, n, sum) {
  if (!judgeValid(arr, n, sum)) {
    return null;
  }

  if (n === 1) {
    let index = arr.indexOf(sum);
    if (index === -1) {
      return null;
    }
    return [arr[index]];
  }

  // 递归
  let a = getSum(arr.slice(1), n - 1, sum - arr[0]);
  if (a) {
    return [arr[0]].concat(a);
  } else {
    return getSum(arr.slice(1), n, sum);
  }
}

function childArraySum (arr = [], n, sum) {
  return getSum(arr.sort((a, b) => a < b), n, sum);
}

console.log(childArraySum([1, 2, 7, 6, 4, 3], 3, 14));
