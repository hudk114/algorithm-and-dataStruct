function deepClone(obj) {
  if(typeof obj!='object') return obj;
  var o=Array.isArray(obj)? []: {};
  for(var i in obj){
    o[i]=(typeof obj[i]=='object')?deepClone(obj[i]):obj[i];
  }
  return o;
}

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

// tree is an array which contains several treenode
var Tree=function (tree) {
  this.tree=tree? tree:{};
}
var TreeNode=function (data) {
  this.data=data,
  this.parent={},
  this.children=[]
}
Tree.prototype={
  constructor:Tree,
  initTree:function (rootData) {
    this.createNode(null, rootData);
  },
  createNode:function (parent, data) {
     var node=parent?this.findNode(parent):null;
     if(!node){
       this.tree.root=new TreeNode(data);
     } else if(-1==node) {

     } else {
       var n=new TreeNode(data);
       n.parent=node;
       node.children.push(n);
     }
  },
  getRoot:function () {
    return this.tree.root?this.tree.root:null;
  },
  getDepth:function() {

  },
  insertChild:function (parent, tree) {

  },
  deleteChild:function (parent) {

  },
  getParent:function (node) {

  },
  // if not found, return -1
  findNode:function (node) {
    // TODO
  },
  // return a deep clone tree
  cloneTree:function () {

  }
}
