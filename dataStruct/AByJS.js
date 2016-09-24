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
    return arr[this.top-1];
  }
}
