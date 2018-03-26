const Stack = require('../../data-struct/stack');
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
        return [x - 1, y];
      case DIRECT.RIGHT:
        return [x, y + 1];
      case DIRECT.DOWN:
        return [x + 1, y];
      case DIRECT.LEFT:
        return [x, y - 1];
      default:
        return null;
    }
  }
}

// judge if the pos is valuable (1, 2 or not in maze is not available)
const judgeVal = (maze, pos) => {

};


const mazePath = function mazePath(maze, start, end) {
  const route = new Stack();
  let m = deepClone(maze);

  if (!judgeVal(m, start)) {
    throw new Error('params wrong');
  }

  let s = new Step(start, DIRECT.UP);
  route.push(s);
  let c = s.

  do {
    if (condition) {
      
    }
  } while (condition);


  if (!) {
    
  }

  while (true) {
    
  }

  // available means which direction is available to explore
  // up right down left
  let curStep = {
    position: deepClone(start),
    // TODO
    available: [true, true, true, true]
  };

  do {
    if (maze[curStep[0]][curStep[1]] === 0) {
      const step = deepClone(curStep);
      stack.push(deepClone(curStep));
      if (curStep[0] === end[0] && curStep[1] === end[1]) {
        break;
      }
      initStep(curStep);
      move(curStep, 'down');
    } else {
      if (stack.isEmpty()) {
        // gg
        break;
      }

      
      
      // TODO 回退
    }

  } while (stack.isEmpty());
};

console.log(mazePath(maze));

module.exports = mazePath;