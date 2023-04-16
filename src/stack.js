const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // initialize empty array to store elements of stack
  }

  push(element) {
    this.items.push(element); // add element to the top of the stack
  }

  peek() {
    return this.items[this.items.length - 1]; // return top element without deleting it
  }

  pop() {
    return this.items.pop(); // remove and return top element from stack
  }
}


module.exports = {
  Stack
};
