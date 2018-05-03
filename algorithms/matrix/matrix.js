/**
 * 矩阵的压缩存储 p95
 */
const { deepClone } = require('../../utils');

class Node {
  constructor (i, j, val) {
    this.i = i;
    this.j = j;
    this.val = val;
  }
}

/**
 * 数组方式存放的matrix，
 */
class ArrayMatrix {
  constructor (nodeArr, width, height) {
    // TODO 进行重排
    this.arr = deepClone(nodeArr);
    this.width = width;
    this.height = height;
  }

  // 输出为普通样式的矩阵
  outPut () {}

  transposition () {
    const newArr = [];
    // 获取每列的值
    const pos = [];
    // 此时pos是每列的数量
    for (let i = 0; i < this.width; i++) {
      pos[i] = 0;
    }
    for (let i = 0; i < this.arr.length; i++) {
      pos[this.arr[i].j]++;
    }

    let lastNum = pos[0];
    let nowNum = null;
    pos[0] = 0;
    for (let i = 1; i < this.width; i++) {
      nowNum = pos[i];
      pos[i] = pos[i - 1] + lastNum;
      lastNum = nowNum;
    }

    this.arr.forEach(node => {
      // 放入newArr的恰当位置，并保证pos[k]永远指向k行的第一个空位
      newArr[pos[node.j]] = new Node(node.j, node.i, node.val);
      pos[node.j]++;
    });

    return new ArrayMatrix(newArr, this.height, this.width);
  }
}

function multArrayMatrix (matrixA, matrixB) {
  if (matrixA.width !== matrixB.height) {
    throw new Error('无法相乘！');
  }

  let answer = [];

  // 获取matrixB每行第一个元素的起始点
  let rPosB = [];
  for (let i = 0; i < matrixB.height; i++) {
    rPosB[i] = 0;
  }
  for (let i = 0; i < matrixB.arr.length; i++) {
    rPosB[matrixB.arr[i].i]++;
  }
  let all = 0;
  let long = rPosB[0];
  for (let i = 0; i < rPosB.length; i++) {
    long = rPosB[i];
    rPosB[i] = all;
    all += long;
  }

  let tmpLine = null;
  // matrixA的当前指向元素
  let mT = 0;
  // answer的当前指向元素
  let aT = 0;
  for (let i = 0; i < matrixA.height; i++) {
    tmpLine = [];
    for (let j = 0; j < matrixB.width; j++) {
      tmpLine[j] = 0;
    }
    // 第i行仍然有元素
    while (mT < matrixA.arr.length && matrixA.arr[mT].i === i) {
      const node = matrixA.arr[mT++];
      // node需要乘以node.j行的所有元素
      let end = node.j < rPosB.length - 1 ? rPosB[node.j + 1] : matrixB.length;
      for (let j = rPosB[node.j]; j < end; j++) {
        // i是matrixB的序号
        tmpLine[matrixB.arr[j].j] += node.val * matrixB.arr[j].val;
      }
    }

    // 存储tmpLine到answer中
    for (let j = 0; j < tmpLine.length; j++) {
      if (tmpLine[j] !== 0) {
        answer.push(new Node(i, j, tmpLine[j]));
      }
    }
  }

  return new ArrayMatrix(answer, matrixB.width, matrixA.height);
}

const m = new ArrayMatrix(
  [
    new Node(0, 1, 12),
    new Node(0, 2, 9),
    new Node(2, 0, -3),
    new Node(2, 5, 14),
    new Node(3, 2, 24),
    new Node(4, 1, 18),
    new Node(5, 0, 15),
    new Node(5, 3, -7)
  ],
  7,
  6
);

const a = new ArrayMatrix(
  [new Node(0, 0, 3), new Node(0, 3, 5), new Node(1, 1, -1), new Node(2, 0, 2)],
  4,
  3
);

const b = new ArrayMatrix(
  [new Node(0, 1, 2), new Node(1, 0, 1), new Node(2, 0, -2), new Node(2, 1, 3)],
  2,
  4
);

console.log(m);
console.log(m.transposition());
console.log(multArrayMatrix(a, b));

module.exports = {
  Node,
  ArrayMatrix,
  multArrayMatrix
};
