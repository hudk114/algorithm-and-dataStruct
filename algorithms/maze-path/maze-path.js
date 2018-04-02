const Stack = require('../../data-struct/js/stack');
const { deepClone } = require('../../utils');

// enum
const DIRECT = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3,
  OVER: 4
};

// 0 means available, 1 means not
const maze = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0]
];

function Step(pos, dir) {
  this.pos = pos;
  this.dir = dir;
};

Step.prototype = {
  constructor: Step,
  nextStep() {
    const x = this.pos[0];
    const y = this.pos[1];
    switch (this.dir) {
      case DIRECT.UP:
        return [x, y - 1];
      case DIRECT.RIGHT:
        return [x + 1, y];
      case DIRECT.DOWN:
        return [x, y + 1];
      case DIRECT.LEFT:
        return [x - 1, y];
      default:
        return null;
    }
  }
}

// judge if the pos is valuable (1, 2 or not in maze is not available)
const judgeVal = (maze, pos) => {
  const x = pos[0];
  const y = pos[1];

  if (y < 0 || y >= maze.length) return false;
  
  const a = maze[y];
  if (x < 0 || x >= a.length) return false;

  return a[x] === 0;
};


const mazePath = function mazePath(maze, start, end) {
  const route = new Stack();
  let m = deepClone(maze);

  let pos = start;
  let step = null;

  do {
    if (judgeVal(m, pos)) {
      if (pos[0] === end[0] && pos[1] === end[1]) {
        route.push(new Step(pos, DIRECT.UP));
        break;
      }
      step = new Step(pos, DIRECT.UP);
      m[pos[1]][pos[0]] = 2;
      route.push(step);
      pos = step.nextStep();
    } else {
      if (route.isEmpty()) {
        break;
      }
      // 取出最后那步
      step = route.pop();
      step.dir++;
      if (step.dir < DIRECT.OVER) {
        pos = step.nextStep();
        route.push(step);
      } else {
        // 当前的已经被踩过了，所以肯定无效下次还会弹出
        pos = step.pos;
      }
    }
  } while (!route.isEmpty());

  if (!route.isEmpty()) {
    let arr = [];
    while(!route.isEmpty()) {
      arr.unshift(route.pop().pos);
    }
    console.log(arr);
  } else {
    console.log('no path')
  }
};

// mazePath(maze, [0, 0], [4, 5]);

module.exports = mazePath;