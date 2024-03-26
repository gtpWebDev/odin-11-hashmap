import Node from "./Node.js";

// note, functionality from the linked list project not used in this project
// has been commented out

class LinkedList {
  constructor() {
    this.head = null;
  }

  head() {
    return this.head;
  }

  // // Get the last node in the list
  // tail() {
  //   if (this.head === null) {
  //     return null;
  //   } else {
  //     let pointer = this.head;
  //     while (pointer.nextNode !== null) {
  //       pointer = pointer.nextNode;
  //     }
  //     return pointer;
  //   }
  // }

  // // Add a new node containing value to the end of the linked list
  // append = (value) => {
  //   const node = new Node(value);
  //   if (!this.head) {
  //     this.head = node;
  //   } else {
  //     const tail = this.tail();
  //     tail.nextNode = node;
  //   }
  // };

  // Add a new node at the start of the linked list
  prepend = (key, value) => {
    const node = new Node(key, value);
    if (this.head) {
      node.nextNode = this.head;
    }
    this.head = node;
  };

  // Return the node at the given index
  at = (index) => {
    if (this.head) {
      let counter = 0;
      let pointer = this.head;
      do {
        if (counter === index) return pointer;
        pointer = pointer.nextNode;
        counter++;
      } while (pointer);
    }
    return null;
  };

  // Remove the last node from the list
  // note, could use this.size to minimise code but the data structure is all about efficiency
  // so best approach is to iterate once only through the list
  // pop = () => {
  //   if (this.head) {
  //     let prevPointer = null;
  //     let pointer = this.head;
  //     while (pointer.nextNode) {
  //       prevPointer = pointer;
  //       pointer = pointer.nextNode;
  //     }
  //     if (prevPointer) {
  //       prevPointer.nextNode = null;
  //     } else {
  //       this.head = null;
  //     }
  //   } else {
  //     console.log("The linked list is empty, there is nothing to pop!");
  //   }
  // };

  // check if the linked list contains the value, returning true or false
  // contains = (val) => {
  //   if (this.head) {
  //     let pointer = this.head;
  //     do {
  //       if (pointer.value === val) return true;
  //       pointer = pointer.nextNode;
  //     } while (pointer);
  //   }
  //   return false;
  // };

  // returns the index of a node containing a specific key, returns null if not found
  find = (key) => {
    let index = 0;
    if (this.head) {
      let pointer = this.head;
      do {
        if (pointer.key === key) {
          return index;
        }
        pointer = pointer.nextNode;
        index++;
      } while (pointer);
    }
    return false;
  };

  // searches the list for a node containing a specific key, returns value, or null if not found
  getValue = (key) => {
    let index = 0;
    if (this.head) {
      let pointer = this.head;
      do {
        if (pointer.key === key) {
          return pointer.value;
        }
        pointer = pointer.nextNode;
        index++;
      } while (pointer);
    }
    return null;
  };

  // print full linked list to console. e.g. (100) -> (50) -> null
  toString = () => {
    let str = "";

    if (this.head) {
      let pointer = this.head;
      while (pointer.nextNode) {
        str += "(" + pointer.key + "/" + pointer.value + ") -> ";
        pointer = pointer.nextNode;
      }
      str += "(" + pointer.key + "/" + pointer.value + ") -> ";
    }
    str += "null";
    console.log(str);
  };

  // size = () => {
  //   let listSize = 0;
  //   if (this.head !== null) {
  //     let pointer = this.head;
  //     listSize++;
  //     do {
  //       listSize++;
  //       pointer = pointer.nextNode;
  //     } while (pointer.nextNode !== null);
  //   }
  //   return listSize;
  // };
}

export { LinkedList as default };
