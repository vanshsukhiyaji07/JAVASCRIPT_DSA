class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    
}

class LinkedListLength extends List {
    getLength() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

}

class LinkedListReverse extends List {
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

class LinkedListSearch extends List {
    search(target) {
      let current = this.head;
  
      while (current) {
        if (current.data === target) return true;
        current = current.next;
      }
      return false;
    }
  }

class LinkedListDelete extends List {
    delete(target) {
        let current = this.head;
        let prev = null;
        while (current) {
          if (current.data === target) {
            if (prev) {
              prev.next = current.next;
            } else {
              this.head = current.next;
            }
            return true;
          }
          prev = current;
          current = current.next;
        }
        return false;
      }
}




const list = new LinkedListDelete();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.display();
// list.getLength();
// list.reverse();
// list.search(3);
list.delete(1);


console.log(list);
