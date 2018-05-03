const judgeVal = (arr, x, number) => {
  // 需要判断的点的y值
  const y = arr.length;
  for (const k in arr) {
    if (!arr.hasOwnProperty(k)) {
      continue;
    }
    // 点坐标为（i, k）
    const i = arr[k];
    let oX = parseInt(i, 10);
    oY = parseInt(k, 10);

    if (x === oX || Math.abs(x - oX) === Math.abs(y - oY)) {
      return false;
    }
  }
  return true;
};

// 当arr.length小于number的时候（说明没有到最后一行），去获取下一个的可能值
const listNext = (arr, number) => {
  const a = [];
  for (let i = 0; i < number; i++) {
    if (judgeVal(arr, i, number)) {
      a.push(i);
    }
  }
  return a;
};

// arr之后的所有可能性
const listInLine = (arr, number) => {
  if (arr.length === number) {
    // last index
    // console.log(arr);
    return 1;
  }

  // if (arr.length === number - 1) {
  //   return listNext(arr, number).length;
  // }

  const available = listNext(arr, number);
  if (available.length === 0) {
    return 0;
  }

  return available.reduce((prev, current) => {
    return prev + listInLine(arr.concat(current), number);
  }, 0);
};

const queen = number => listInLine([], number);

console.log(queen(8));

module.exports = queen;
