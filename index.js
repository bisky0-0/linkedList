class Node {
    constructor(value, nextNode) {
        this.value = value || null;
        this.nextNode = nextNode || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    };

    append(value, check = this.head) {
        if (check == null) this.head = new Node(value, null)
        else {
            if (check.nextNode == null) return check.nextNode = new Node(value, null);
            return this.append(value, check = check.nextNode)
        }
    }

    prepend(value) {
        if (this.head == null) {
            this.head = new Node(value, null)
        }
        else {
            let exchange = new Node(value, this.head);
            return this.head = exchange;
        }
    }

    size(check = this.head, count = 0) {
        if (this.head == null) return count;
        else {
            count++
            if (check.nextNode == null) return count;
            return this.size(check = check.nextNode, count++)
        }
    }

    headElement() {
        return this.head
    }

    tail(check = this.head) {
        if (this.head == null) return "the list is empty";
        else {
            if (check.nextNode == null) return check;
            return this.tail(check = check.nextNode)
        }
    }

    at(index, check = this.head, count = 0) {
        // if (this.head == null) return "the list is empty";
        if (check == null) return "it's not exist"
        else {
            if (index == count) return check;
            count++
            return this.at(index, check = check.nextNode, count++)
        }
    }

    pop(check = this.head) {
        if (this.head == null) return "this list is empty";
        if (check.nextNode.nextNode == null) return check.nextNode = null;
        return this.pop(check = check.nextNode)
    }

    containes(value, check = this.head) {
        if (this.head == null) return "this list is empty"
        if (check.value == value) return true;
        if (check.nextNode == null) return false;
        return this.containes(value, check = check.nextNode)
    }

    find(value, check = this.head, count = 0) {
        if (check == null) return "not exist";
        if (value == check.value) return count;
        count++
        return this.find(value, check = check.nextNode, count++)
    }

    toString(str = "", check = this.head) {
        if (this.head == null) return "this list is empty";
        if (check == null) return str += 'null';
        return this.toString(str += `(${check.value}) -> `, check = check.nextNode)
    }

    insertAt(value, index, check = this.head, count = 0) {
        if (this.head == null) return "this list is empty";
        if (check == null) return "choose an index inside the list range";
        if (index == 0) return this.prepend(value)
        if (index - count == 1) {
            let restOfNodes = check.nextNode
            return check.nextNode = new Node(value, restOfNodes)
        }
        count++
        return this.insertAt(value, index, check = check.nextNode, count++)
    }

    removeAt(index, check = this.head, count = 0) {
        if (this.head == null) return "this list is empty";
        if (check == null) return "choose an index inside the list range";
        if (index == 0) {
            let restOfNodes = this.head.nextNode;
            return this.head = restOfNodes
        }
        if (index - count == 1) {
            let restOfNodes = check.nextNode.nextNode;
            return check.nextNode = restOfNodes;
        }
        count++
        return this.removeAt(index, check = check.nextNode, count++)
    }

}


let linkedList = new LinkedList()

linkedList.append("test1");
linkedList.append('test2');
linkedList.append('test3');
linkedList.append('test4');
linkedList.append('test5');
console.log(linkedList.size())
console.log(linkedList.headElement())
console.log(linkedList.tail())
console.log(linkedList.at(2))
console.log(linkedList.pop())
console.log(linkedList.containes('test6'))
console.log(linkedList.find('test4'))
console.log(linkedList.toString())

console.log(linkedList.insertAt("test10", 0))
console.log(linkedList.toString())
console.log(linkedList.removeAt(0))
console.log(linkedList.toString())











