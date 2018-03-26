const Node = function Node(data) {
  this.data = data;
  this.next = null;
};

const LinkedList = function LinkedList() {
  this.len = 0;
  this.firstNode = new Node(null);
};

LinkedList.prototype = {
  constructor: LinkedList,
  _judgeMemory(index) {
    if (index >= this.len || index < 0) {
      throw new Error('out of memory');
    }
  },
  getEle(index) {
    this._judgeMemory(index);
    let tmp = this.firstNode;
    let i = 0;
    while (i++ <= index) {
      tmp = tmp.next;
    }
    return tmp.data;
  },
  _getEle(index) {
    this._judgeMemory(index);
    let tmp = this.firstNode;
    let i = 0;
    while (i++ <= index) {
      tmp = tmp.next;
    }
    return tmp;
  },
  insert(data, index = this.len) {
    if (index > this.len || index < 0) {
      throw new Error('out of memory');
    }

    let prior = index === 0 ?
      this.firstNode :
      this._getEle(index - 1);

    const tmp = new Node(data);
    tmp.next = prior.next;
    prior.next = tmp;
    this.len++;
    return true;
  },
  delete(index) {
    this._judgeMemory();

    let prior = index === 0 ?
      this.firstNode :
      this._getEle(index - 1);

    const tmp = prior.next;
    prior.next = prior.next.next;
    this.len--;
    return tmp;
  },
  priorEle(data) {
    let tmp = this.firstNode;
    let prior = null;

    while (tmp.next && tmp.next.data !== data) {
      prior = tmp;
      tmp = tmp.next;
    }

    if (tmp.next) {
      return tmp.data;
    } else {
      return null;
    }
  },
  nextEle(data) {
    let tmp = this.firstNode;
    let prior = null;

    do {
      tmp = tmp.next;
      if (tmp && tmp.data === data) {
        break;
      }
    } while (tmp && tmp.next);

    if (tmp && tmp.next) {
      return tmp.next.data;
    } else {
      return null;
    }
  },
};