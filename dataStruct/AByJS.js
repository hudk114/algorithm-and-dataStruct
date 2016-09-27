/// stack
var Stack=function () {
  this.top=0;
  this.base=0;
  this.arr=[];
}
Stack.prototype = {
  constructor: Stack,
  push: function (obj) {
    this.arr.push(obj);
    this.top++;
  },
  pop: function () {
    if(this.top<=this.base) return null;
    var t = this.arr.pop();
    this.top--;
    return t;
  },
  getLength:function () {
    return this.top-this.base;
  },
  getTop:function () {
    if(this.top<=this.base) return null;
    return this.arr[this.top-1];
  },
  empty:function () {
    this.top=0;
    this.base=0;
    this.arr=[];
  }
}

var Queue=function () {
  this.front=0;
  this.rear=0;
  this.arr=[];
}
Queue.prototype={
  constructor: Queue,
  insert: function (val) {
    this.arr.push(obj);
    this.rear++;
  },
  shift: function () {
    if(this.rear<=this.front) return null;
    var t = this.arr.shift();
    this.rear--;
    return t;
  },
  getLength: function () {
    return this.rear-this.front;
  },
  getHead: function () {
    if(this.rear<=this.front) return null;
    return this.arr[this.front];
  },
  empty: function () {
    this.front=0;
    this.rear=0;
    this.arr=[];
  }
};
