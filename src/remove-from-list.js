const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  function remove(nodeList, k) {
    if (!nodeList.next) return nodeList;
    if (nodeList.value === k) nodeList = remove(nodeList.next, k);
    if (nodeList.next.value !== k) nodeList.next = remove(nodeList.next, k);
    else {
      let nextNodeWithoutK = nodeList.next;
      while (nextNodeWithoutK && nextNodeWithoutK.value === k) {
        nextNodeWithoutK = nextNodeWithoutK.next;
      }
      if (!nextNodeWithoutK || nextNodeWithoutK.value === k)
        nodeList.next = null;
      else nodeList.next = remove(nextNodeWithoutK, k);
    }
    return nodeList;
  }
  return remove(l, k);
}

module.exports = {
  removeKFromList
};
