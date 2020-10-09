'use strict';

/** Class representign a SinglyLinkedList */
class SinglyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  /**
   * @return {boolean} True if the list is empty, false otherwise
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Add a new node to the tail of the list.
   * Note: in the API definition of this method we assume the user
   * will pass a Node Object. Checking if that's the case and giving
   * feedback to the user if it's not could be an improvement here.
   * @param {Node} node - a Node object
   */
  add(node) {
    if (this.isEmpty()) {
      this.head = node 
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  /**
   * Reverse the instance in-place
   */
  reverse() {
    if (this.length < 2) {
      return this;
    } else {
      let previous = null;
      let next = null;
      let current = this.head;
      this.tail = this.head;

      while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }
      this.head = previous;
      return previous;
    }
  }

  log() {
    let node = this.head;
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
}