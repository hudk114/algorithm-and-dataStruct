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
// use array as its storage
var Tree=function (tree) {
  this.tree=tree? tree: [];
  this.num=0;
}
var TreeNode=function (data, parent) {
  this.data=data,
  this.parent=parent,
  this.children=[]
}
Tree.prototype={
  constructor:Tree,
  initTree:function (rootData) {
    this.createNode(null, rootData);
  },
  createNode:function (parent, data) {
    if(!parent){
      this.tree.root=new TreeNode(data);
    } else {
      var node=this.findNode(parent);
      if(node){
        var n=new TreeNode(data, parent);
        node.children.push(n);
      }
    }
  },
  getRoot:function () {
    return this.tree.root? this.tree.root: null;
  },
  getDepth:function() {

  },
  insertChild:function (parent, tree) {
    var node=this.findNode(parent);
    if(node){
      node
    }
  },
  // delete the index tree of parent
  deleteChild:function (parent, index) {
    var node=this.findNode(parent);
    if(node&&node.children.length>=index) {
      node.children.splice(index, 1);
    }
  },
  getParent:function (node) {

  },
  // if not found, return null
  findNode:function (node) {
    // TODO
  },
  // return a deep clone tree
  cloneTree:function () {

  }
}
