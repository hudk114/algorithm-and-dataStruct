/**
 * 头条面试题
 * 在给定数组中获取和最大的子组
 * 例如: [1, 2, -1, -3, 4, 6, -9, 3, 7, -2, 1] 输出 [4, 6, -9, 3, 7]
 */

function getMaxChild (arr = []) {
  if (!arr.length) return [];

  let i = 0;
  let tmpArr = [];
  let tmpSum = 0;
  let a = [arr[0]] || [];
  let sum = arr[0] || 0;

  // 全是负数的情况
  while (i < arr.length && arr[i] < 0) {
    if (sum < arr[i]) {
      a = [arr[i]];
      sum = arr[i];
    }
    i++;
  }
  if (i >= arr.length) return a;

  // 从0开始
  sum = 0;
  for (; i < arr.length; i++) {
    if (arr[i] >= 0) {
      // 往tmpArr里面插入，并且计算到tmpSum里
      tmpArr.push(arr[i]);
      tmpSum += arr[i];
    } else {
      // 判断tmpSum是不是比sum大，如果是的话（找到了更大的子串），替换现在的sum和arr
      if (tmpSum > sum) {
        a = tmpArr.concat([]);
        sum = tmpSum;
      }

      // 如果是tmpSum + arr[i]小于等于0就不用加进去了，归零即可
      if (tmpSum + arr[i] >= 0) {
        tmpSum += arr[i];
        tmpArr.push(arr[i]);
      } else {
        // 归零运算，如果tmpSum > sum，说明
        tmpSum = 0;
        tmpArr = [];
      }
    }
  }

  if (tmpSum > sum) {
    a = tmpArr.concat([]);
  }

  return a;
}

var arr1 = [-1, -2, -3];
var arr2 = [-1, 2, -3, 4, 5, 6, -3];
var arr3 = [1, 2, -2, 3, -4, 3, 5, 7, -16];
var arr4 = [1, 2, -2, 3, -4, 3, 5, 7, -16, 9, 2, 5, -2, 3];

console.log(getMaxChild(arr1));
console.log(getMaxChild(arr2));
console.log(getMaxChild(arr3));
console.log(getMaxChild(arr4));
