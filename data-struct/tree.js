// tree is an array which contains several treenode
// use array as its storage
const Tree = function(tree) {
  this.tree = tree ? tree : [];
  this.num = 0;
};

const TreeNode = function(data, parent) {
  (this.data = data), (this.parent = parent), (this.children = []);
};

Tree.prototype = {
  constructor: Tree,
  initTree: function(rootData) {
    this.createNode(null, rootData);
  },
  createNode: function(parent, data) {
    if (!parent) {
      this.tree.root = new TreeNode(data);
    } else {
      const node = this.findNode(parent);
      if (node) {
        const n = new TreeNode(data, parent);
        node.children.push(n);
      }
    }
  },
  getRoot: function() {
    return this.tree.root ? this.tree.root : null;
  },
  getDepth: function() {},
  insertChild: function(parent, tree) {
    const node = this.findNode(parent);
    if (node) {
      node;
    }
  },
  // delete the index tree of parent
  deleteChild: function(parent, index) {
    const node = this.findNode(parent);
    if (node && node.children.length >= index) {
      node.children.splice(index, 1);
    }
  },
  getParent: function(node) {},
  // if not found, return null
  findNode: function(node) {
    // TODO
  },
  // return a deep clone tree
  cloneTree: function() {}
};

module.exports = Tree;
