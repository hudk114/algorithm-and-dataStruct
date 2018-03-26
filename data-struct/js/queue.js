const Queue = function() {
  this.front = 0;
  this.rear = 0;
  this.arr = [];
};

Queue.prototype = {
  constructor: Queue,
  insert: function(val) {
    this.arr.push(obj);
    this.rear++;
  },
  shift: function() {
    if (this.rear <= this.front) return null;
    const t = this.arr.shift();
    this.rear--;
    return t;
  },
  getLength: function() {
    return this.rear - this.front;
  },
  getHead: function() {
    if (this.rear <= this.front) return null;
    return this.arr[this.front];
  },
  empty: function() {
    this.front = 0;
    this.rear = 0;
    this.arr = [];
  }
};

module.exports = Queue;