const LinkedList = () => {
  let headNode = null;
  
  //append(value) adds a new node containing value to the end of the list
  const append = (node) => {
    if (headNode === null) { //If the list is empty
      prepend(node);
    } else if (headNode.nextNode === null) { //If there is only one node in the list
      headNode.nextNode = node;
    } else { //If there are multiple nodes in the list
      let prevEndingNode = traverse().endingNode; //Start from the headNode and traverse down
      prevEndingNode.nextNode = node;
    }
  }
  //prepend(value) adds a new node containing value to the start of the list
  const prepend = (node) => {
    if (headNode !== null) {
      const prevHeadNode = headNode;
      node.nextNode = prevHeadNode;
    } 
    headNode = node;
  }
  //size returns the total number of nodes in the list
  const size = () => {
    return traverse().array.length;
  }
  //head returns the first node in the list
  const head = () => {
    return headNode;
  }
  //tail returns the last node in the list
  const tail = () => {
    return traverse().endingNode;
  }
  //at(index) returns the node at the given index
  const at = (index) => {
    return traverse().array[index];
  }
  //pop removes the last element from the list
  const pop = () => {
    let newTailNodePosition = list.size() - 2; //-2 to account for size starting at 1 and index starting at 0
    let newTailNode = list.at(newTailNodePosition);

    newTailNode.nextNode = null;
  }
  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  const contains = (value) => {
    return !!find(value);
  }
  //find(value) returns the index of the node containing value, or null if not found.
  const find = (value) => {
    let arrayOfNodeValues = traverse().array.map(node => node.value);
    let result = arrayOfNodeValues.find(elem => elem === value);
    if (result) {
      return result;
    } else {
      return null;
    };
  }
  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let string = '';
    let arrayOfNodes = traverse().array;
    
    arrayOfNodes.forEach(node => {
      string += `( ${node.value} )`;
      
      if (node.nextNode !== null) {
        string += ` -> `;
      }
    })

    return string;
  }

  const traverse = () => {
    let array = [];
    let endingNode = traverseRecursive(headNode).node;

    function traverseRecursive(node) {
      if (node.nextNode === null) {
        array.push(node);
        return { node };
      } else {
        array.push(node)
        return traverseRecursive(node.nextNode);
      }
    }

    return { endingNode, array };
  }

  return { append, prepend, size, head, tail, at, pop, contains, find, toString }
}

const Node = (value = null, nextNode = null) => {
  return { value, nextNode }
}

let list = LinkedList();
const firstNode = Node('Alphabet');
const secondNode = Node('Bear');
const thirdNode = Node('Cat');

list.append(firstNode);
list.append(secondNode);
list.append(thirdNode);

list.pop();

console.log('tail: ' + list.tail().value);
console.log('head: ' + list.head().value);

console.log('first node: ' + firstNode.value);
console.log('second node: ' + secondNode.value);
console.log('third node: ' + thirdNode.value);
console.log('size: ' + list.size());

console.log('at 1 ' + list.at(0).value);

console.log(list.toString());
console.log(list.find('Bear'));
console.log(list.find('Car'));
console.log(list.contains('Alphabet'));
console.log(list.contains('Car'));