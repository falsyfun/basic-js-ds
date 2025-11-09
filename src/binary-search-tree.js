const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(node, data) {
      while (node !== null) {
        if (node.data === data) {
          return node;
        } else if (data < node.data) {
          node.left = addNode(node.left, data);
        } else {
          node.right = addNode(node.right, data);
        }
        return node;
      }
      return new Node(data);
    }
  }

  find(data) {
    let node = this.treeRoot;
    while (node !== null) {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  has(data) {
    let node = this.treeRoot;
    while (node !== null) {
      if (data === node.data) {
        return true;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (node === null) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      if (node.left === null && node.right === null) return null;
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node;
    }
  }

  min() {
    let node = this.treeRoot;
    while (node && node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.treeRoot;
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};