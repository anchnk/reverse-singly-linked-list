'use strict';

/** Class Representing a SinglyLinkedList node */
class Node {
  /**
   * Constructs a new Node
   * @param {number} value 
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  Node
}