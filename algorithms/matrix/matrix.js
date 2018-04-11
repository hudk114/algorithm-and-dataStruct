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
  outPut () {
    
  }

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

const m = new ArrayMatrix([
  new Node(0, 1, 12),
  new Node(0, 2, 9),
  new Node(2, 0, -3),
  new Node(2, 5, 14),
  new Node(3, 2, 24),
  new Node(4, 1, 18),
  new Node(5, 0, 15),
  new Node(5, 3, -7)
], 7, 6);

console.log(m);
console.log(m.transposition());
