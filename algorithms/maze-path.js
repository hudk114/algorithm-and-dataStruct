const Stack = require('../data-struct/stack');
const { deepClone } = require('../utils');

const maze = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0]
];

const initStep = function initStep(step) {
  step.available = [true, true, true, true];
};

const move = function move(step, direct) {
  switch (direct) {
    case 'up':
      step.postion[0]--;
      step.available[2] = false;
      break;
    case 'down':
      step.postion[0]++;
      step.available[0] = false;
      break;
    case 'left':
      step.postion[1]--;
      step.available[1] = false;
      break;
    case 'right':
      step.postion[1]++;
      step.available[3] = false;
      break;
    default:
      break;
  }
};

const mazePath = function mazePath(maze, start, end) {
  const stack = new Stack();
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