const LinkedList = () => {
  let headNode = null;
  
  //append(value) adds a new node containing value to the end of the list
  const append = (node) => {
    if (headNode === null) {
      headNode = node
    } else {
      let temp = headNode;
      while (temp.nextNode) {
        temp = temp.nextNode;
      }
      temp.nextNode = node;
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
    let counter = 0;
    if (headNode !== null) {
      counter++;
      let temp = headNode;
      while (temp.nextNode) {
        counter++;
        temp = temp.nextNode;
      }
    }
    return counter;
  }
  //head returns the first node in the list
  const head = () => {
    return headNode;
  }
  //tail returns the last node in the list
  const tail = () => {
    if (headNode !== null) {
      let temp = headNode;
      while (temp.nextNode) {
        temp = temp.nextNode
      }
      return temp;
    }
    return null;
  }
  //at(index) returns the node at the given index
  const at = (index) => {
    if (index === 0) {
      return headNode;
    } else {
      let temp = headNode;
      let counter = 0;
      while (temp.nextNode && counter < index) {
        counter++;
        temp = temp.nextNode;
      }
      return temp;
    }
  }
  //pop removes the last element from the list
  const pop = () => {
    let newTailNodePosition = size() - 2;
    let newTailNode = at(newTailNodePosition);
    newTailNode.nextNode = null;
  }
  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  const contains = (value) => {
    return find(value) !== null;
  }
  //find(value) returns the index of the node containing value, or null if not found.
  const find = (value) => {
    let temp = headNode;
    let counter = 0;
    while (temp) {
      if (temp.value === value) {
        return counter;
      } else {
        counter++;
        temp = temp.nextNode;
      }
    }
    return null;
  }
  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let string = '';
    let temp = headNode;
    while (temp) {
      string += `( ${temp.value} )`
      if (temp.nextNode) string += ` -> `
      temp = temp.nextNode;
    }
    return string;
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
const fourthNode = Node('Duck');
const fifthNode = Node('000');

list.append(firstNode);
list.append(secondNode);
list.append(thirdNode);
list.prepend(fourthNode);

list.pop();

list.append(fifthNode);

console.log('tail: ' + list.tail().value);
console.log('head: ' + list.head().value);

console.log('size: ' + list.size());

console.log('at 1 ' + list.at(0).value);
console.log('at 2 ' + list.at(1).value);
console.log('at 3 ' + list.at(2).value);

console.log(list.toString());
console.log(list.find('Alphabet'));
console.log(list.find('Bear'));
console.log(list.find('Cat'));
console.log(list.find('Car'));
console.log(list.contains('Alphabet'));
console.log(list.contains('Bear'));
console.log(list.contains('Car'));