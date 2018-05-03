const Node = function Node (data) {
  this.data = data;
};

const LinearList = function LinearList () {
  this.len = 0;
  this.arr = [];
};

LinearList.prototype = {
  constructor: LinearList,
  _judgeMemory (index) {
    if (index >= this.len || index < 0) {
      throw new Error('out of memory');
    }
  },
  getEle (index) {
    this._judgeMemory(index);

    return this.arr[index].data;
  },
  insert (data, index = this.len) {
    if (index > this.len || index < 0) {
      throw new Error('out of memory');
    }

    let i = this.len;
    for (; i > index;) {
      this.arr[i] = this.arr[--i];
    }
    this.arr[index] = new Node(data);
    this.len++;
    return true;
  },
  delete (index) {
    this._judgeMemory(index);

    let i = index;
    let tmp = this.arr[index];
    for (; i < this.len;) {
      this.arr[i] = this.arr[++i];
    }
    this.arr.pop();
    this.len--;
    return tmp.data;
  },
  priorEle (data) {
    const index = this.arr.findIndex(item => item.data === data);

    if (!index) {
      return null;
    }

    try {
      this._judgeMemory(index - 1);
      return this.arr[index - 1].data;
    } catch (e) {
      return null;
    }
  },
  nextEle (data) {
    const index = this.arr.findIndex(item => item.data === data);

    if (!index) {
      return null;
    }

    try {
      this._judgeMemory(index + 1);
      return this.arr[index + 1].data;
    } catch (e) {
      return null;
    }
  }
};
