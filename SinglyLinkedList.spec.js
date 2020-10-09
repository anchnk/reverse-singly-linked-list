"use strict";

const expect = require("chai").expect;

const { SinglyLinkedList } = require("./SinglyLinkedList");
const { Node } = require("./Node");

describe("SingleLinkedList Class", function () {
  let linkedList = null;

  beforeEach(() => {
    linkedList = new SinglyLinkedList();
  });

  after(() => {
    // Cleaning up the linkedList reference for GC
    linkedList = null;
  })

  describe("add(node) method", function () {
    it("should return a linkedList with 1 node after one call", function () {
      const node = new Node(1);
      linkedList.add(node);

      expect(linkedList.length).to.equal(1);
    });

    it("should return a list with head equals to tail if the list was empty", function () {
      const node = new Node(1);
      linkedList.add(node);

      expect(linkedList.head).to.equal(node);
      expect(linkedList.tail).to.equal(node);
    });

    it("should return a list with N elements after N calls", function () {
      linkedList
        .add(new Node(1))
        .add(new Node(2))
        .add(new Node(3))
        .add(new Node(4));

      expect(linkedList.length).to.equal(4);
    });

    it("should return a list with head equals to first inserted node", function () {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);
      const node4 = new Node(4);
      linkedList.add(node1).add(node2).add(node3).add(node4);

      expect(linkedList.head).to.equal(node1);
    });

    it("should return a list with tails equals to last inserted node", function () {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);
      const node4 = new Node(4);
      linkedList.add(node1).add(node2).add(node3).add(node4);

      expect(linkedList.tail).to.equal(node4);
    });

    it("should return itself after add is called", function () {
      const returnedValue = linkedList.add(new Node(1));

      expect(linkedList).to.equal(returnedValue);
    });
  });

  describe("reverse() method", function () {
    it("should return itself when the list is empty", function () {
      expect(linkedList.length).to.equal(0);
      linkedList.reverse();

      expect(linkedList.length).to.equal(0);
      expect(linkedList).to.equal(linkedList);
    });

    it("should return itself when the list has just 1 element", function () {
      const node = new Node(1);
      linkedList.add(node);
      linkedList.reverse();

      expect(linkedList.length).to.equal(1);
      expect(linkedList.head).to.equal(node);
      expect(linkedList.tail).to.equal(node);
    });

    it("should return the same list when reverse() is called twice", function () {
      linkedList
        .add(new Node(1))
        .add(new Node(2))
        .add(new Node(3))
        .add(new Node(4));

      linkedList.reverse();
      linkedList.reverse();

      expect(linkedList.length).to.equal(4);
      expect(linkedList).to.equal(linkedList);
    });

    it("should reverse itself when reverse is called once", function () {
      linkedList
        .add(new Node(1))
        .add(new Node(2))
        .add(new Node(3))
        .add(new Node(4));

      linkedList.reverse();

      const reversedList = new SinglyLinkedList()
        .add(new Node(4))
        .add(new Node(3))
        .add(new Node(2))
        .add(new Node(1));

      expect(linkedList.length).to.equal(4);

      // Note that we check with deep equality as linkedList and reversedList refers
      // to two different object in memory
      expect(linkedList).to.deep.equal(reversedList); 
    });
  });
});