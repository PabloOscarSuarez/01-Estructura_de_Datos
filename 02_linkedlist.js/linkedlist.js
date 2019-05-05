function LinkedList() {
    this.tail = null;
    this.head = null;
  }
  
  function Node (value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.previous = prev || null;
  }
  
  LinkedList.prototype.addToTail = function(value) {
    var newTail = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newTail;
    } else {
      this.head = newTail;
    }
    this.tail = newTail;
  };
  
  LinkedList.prototype.addToHead = function(value) {
    var newHead = new Node(value, this.head, null);
    if(this.head) {
      this.head.previous = newHead;
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
  
  };
  
  LinkedList.prototype.removeHead = function() {
    if (!this.head) return;
    var oldValue = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else  {
      this.tail = null;
    }
    return oldValue;
  };
  
  LinkedList.prototype.removeTail = function() {
    if (!this.tail) return;
    var oldValue = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.tail = null;
    }
    return oldValue;
  };
  
  function isFn (fn) {
    return typeof fn === 'function';
  }
  
  LinkedList.prototype.search = function(predicate) {
   var correct = isFn(predicate) ? predicate : function(value) {
    return value === predicate;
   }
    var currentNode = this.head;
    while (currentNode) {
      if (correct(currentNode.value)) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  };

  
/*
JESU VERSION
function LinkedList(){
    this.head = null;
    this.tail = null;
    this._length = 0;
}

function Node(value){
    this.value = value
    this.next = null;
    this.previous = null;
}

LinkedList.prototype.addToTail = function(data){
    let newNode = new Node(data)
    this._length++;
    if(!this.tail){
        this.tail = newNode
        this.head = newNode;
        return newNode
    }

    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
    return newNode
}


LinkedList.prototype.addToHead = function(data){
    let node = new Node(data)
    this._length++;
    if(!this.head){
        this.tail = node
        this.head = node;
        return node
    }

    this.head.previous = node;
    node.next = this.head
    this.head = node
    return node
}

LinkedList.prototype.removeHead = function(){
    if(this.head){
        this._length--;
        let head = this.head;
        
        let nextNode = this.head.next;
        if(nextNode){
            nextNode.previous = null;
        } else{
            this.tail = nextNode
        }
        
        this.head = nextNode;

        return head.value
    }
}

LinkedList.prototype.removeTail = function(){
    if(this.tail){
        this._length--;
        let tail = this.tail;
        
        const prevNode = this.tail.previous;
        if(prevNode){
            prevNode.next = null;
        } else{
            this.head = null
        }
        
        this.tail = prevNode;

        return tail.value
    }
}

LinkedList.prototype.search = function(text){

    if(this.head){
        let current = this.head;
        
        while(current){
            if(typeof text === 'function' && text(current.value)){
                return current.value
            }
            else if(current.value === text){
                return current.value
            }
            current = current.next
        }

    }
    return null
}
*/