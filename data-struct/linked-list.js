const Node = function Node(data) {
  this.data = data;
  this.next = null;
};

const LinkedList = function LinkedList() {
  this.length = 0;
  this.firstNode = new Node(this.length);
};

LinkedList.prototype = {
  constructor: LinkedList,
  getElement(index) {

  },
  insert(node, index = this.length) {
    
  },
  delete(index) {

  }
};