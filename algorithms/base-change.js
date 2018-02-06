const Stack = require('../data-struct/stack');

// TODO
// 原始为10进制
const changeBase = function changeBase(value, base) {
  const stack = new Stack();

  let v = value || 0;

  while (v) {
    stack.push(v % base);
    v = Math.floor(v / base);
  }

  let d = '';
  while (stack.getLength() > 0) {
    d += stack.pop();
  }

  return d;
};

module.exports = changeBase;
