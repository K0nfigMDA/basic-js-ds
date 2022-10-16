const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.rootNode = null
	}

	searchNode(callback) {
		const queue = [this.rootNode]
		while(queue.length) {
			const node = queue.shift()
			callback(node)
			if(node.left) {
				queue.push(node.left)
			}
			if(node.right) {
				queue.push(node.right)
			}
		}
	}

	root() {
		return this.rootNode
	}

  add(data) {
	const newNode = new Node(data)
	if(!this.rootNode) {
		this.rootNode = newNode
		return
	}
	let currentNode = this.rootNode
	while(currentNode)
		if(newNode.data < currentNode.data) {
			if(!currentNode.left) {
				currentNode.left = newNode
				return
			}
			currentNode = currentNode.left
		} else {
			if(!currentNode.right) {
				currentNode.right = newNode
				return
			}
			currentNode = currentNode.right
		}
  }

  has(data) {
	const arr = []
    this.searchNode((node) => {
		arr.push(node.data)
	 })
	 if(arr.includes(data)) {
		return true
	 } else {
		return false
	 }
  }

  find(data) {
	const arr = []
    this.searchNode((node) => {
		arr.push(node)
	 })
	 const result = arr.find(el => el.data === data)
	 if(result) {
		return result
	 } else {
		return null
	 }
  }

  remove(data) {
	
  }

  min() {
	const arr = []
	this.searchNode((node) => {
	  if(node !==null)arr.push(node.data)
	})
	if(arr.length > 0) {return Math.min(...arr)}
	else {return null}
  }

  max() {
   const arr = []
	this.searchNode((node) => {
	  if(node !==null)arr.push(node.data)
	})
	if(arr.length > 0) {return Math.max(...arr)}
	else {return null}
  }
}



module.exports = {
  BinarySearchTree
};