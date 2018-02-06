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