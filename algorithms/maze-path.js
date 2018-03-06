const Stack = require('../data-struct/stack');
const { deepClone } = require('../utils');

// enum
const DOWN = 0;
const RIGHT = 1;
const UP = 2;
const LEFT = 3;

const maze = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0]
];

/**
 * 
 * @param {array} pos the position of the step
 * @param {number} dir the direction next step
 * @param {array} alr the direction which has been explored
 */
function Step(pos = [0, 0], dir = DOWN, alr = []) {
  this.pos = pos;
  this.dir = dir;
  this.alr = alr;
};

Step.prototype = {
  constructor: Step,
  move (direct) {
    // TODOsde judge alr
    switch (direct) {
      case UP:

        break;
      case DOWN:

        break;
      case RIGHT:

        break;
      case LEFT:

        break;
      default:
        break;
    }
  },
}

const move = function move(pos, direct) {
  switch (direct) {
    case 'up':
      pos[0]--;
      break;
    case 'down':
      pos[0]++;
      break;
    case 'left':
      pos[1]--;
      break;
    case 'right':
      pos[1]++;
      break;
    default:
      break;
  }
};

const mazePath = function mazePath(maze, start, end) {
  const stack = new Stack();
  let curStep = deepClone(start);

  do {
    if (maze[curStep[0]][curStep[1]] === 0) {
      stack.push(deepClone(curStep));
      if (curStep[0] === end[0] && curStep[1] === end[1]) {
        break;
      }
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