const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

	constructor(){
		this.arr = []
	}

  getUnderlyingList() {
	return this.arr[0]
  }

  enqueue(el) {
	const elem = new ListNode(el)
	if(this.arr.length > 0) { 
	this.arr[this.arr.length - 1].next = elem}
	
	this.arr.push(elem)


  }

  dequeue() {
	return this.arr.shift().value
  }
}
const queue1 = new Queue

queue1.enqueue(5)
queue1.enqueue(6)
console.log(queue1.getUnderlyingList())
console.log(queue1)

module.exports = {
  Queue
};
