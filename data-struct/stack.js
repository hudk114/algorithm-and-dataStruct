const Stack = function() {
  this.top = 0;
  this.base = 0;
  this.arr = [];
};

Stack.prototype = {
  constructor: Stack,
  push: function(obj) {
    this.arr.push(obj);
    this.top++;
  },
  pop: function() {
    if (this.top <= this.base) return null;
    const t = this.arr.pop();
    this.top--;
    return t;
  },
  getLength: function() {
    return this.top - this.base;
  },
  getTop: function() {
    if (this.top <= this.base) return null;
    return this.arr[this.top - 1];
  },
  empty: function() {
    this.top = 0;
    this.base = 0;
    this.arr = [];
  },
  isEmpty() {
    return this.getLength() === 0;
  }
};

module.exports = Stack;