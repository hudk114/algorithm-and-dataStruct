const fixArr = arr => {
  return typeof arr === 'string' ? arr.split('') : arr;
};

const bCheck = arr => {
  if (arr.length === 0) {
    return null;
  }

  return true;
};

/**
 * next的每项都是该项之前数组的最大相同前后缀数值
 * @param {Array} arr 传入的arr
 */
const next0 = arr => {
  arr = fixArr(arr);

  if (!bCheck(arr)) {
    return bCheck(arr);
  }

  let next = [null];
  for (let i = 1; i < arr.length; i++) {
    let j = next[i - 1];

    while (j !== null && arr[j] !== arr[i - 1]) {
      j = next[j];
    }

    if (j !== null) {
      next[i] = j + 1;
    } else {
      next[i] = 0;
    }
  }

  return next;
};

const next1 = arr => {
  arr = fixArr(arr);

  if (!bCheck(arr)) {
    return bCheck(arr);
  }

  let next = [-1];
  let i = 0;
  let j = -1;
  for (; i < arr.length - 1;) {
    while (j !== -1 && arr[j] !== arr[i]) {
      j = next[j];
    }
    next[++i] = ++j;
  }

  return next;
};

const next = arr => {
  arr = fixArr(arr);

  if (!bCheck(arr)) {
    return bCheck(arr);
  }

  let next = [-1];
  let i = 0;
  let j = -1;
  while (i < arr.length - 1) {
    if (j === -1 || arr[j] === arr[i]) {
      next[++i] = ++j;
    } else {
      j = next[j];
    }
  }

  return next;
};

const kmpNext = arr => {
  arr = fixArr(arr);

  if (!bCheck(arr)) {
    return bCheck(arr);
  }

  let next = [-1];
  let i = 0;
  let j = -1;
  while (i < arr.length - 1) {
    if (j === -1 || arr[j] === arr[i]) {
      if (arr[++i] !== arr[++j]) {
        next[i] = j;
      } else {
        next[i] = next[j];
      }
    } else {
      j = next[j];
    }
  }

  return next;
};

// console.log(next0('abaabcac'));
// console.log(next1('abaabcac'));
// console.log(next('abaabcac'));
// console.log(kmpNext('abaabcac'));

module.exports = {
  next,
  kmpNext
};
