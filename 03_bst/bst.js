function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  BinarySearchTree.prototype.insert = function(value) {
   var direction = value > this.value ? 'right' : 'left';
   if (this[direction]) this[direction].insert(value);
   else this[direction] = new BinarySearchTree(value);
  };
  
  BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) return true;
    if (this.left && this.value > value) return this.left.contains(value);
    if (this.right && this.value < value) return this.right.contains(value);
    return false;
  };
  
  BinarySearchTree.prototype.depthFirstForEach = function(fn, option = 'in-order') {
    if (option === 'in-order') {
      this.left && this.left.depthFirstForEach(fn, option);
      fn(this.value);
      this.right && this.right.depthFirstForEach(fn, option);
    } else if (option === 'pre-order') {
      fn(this.value);
      this.left && this.left.depthFirstForEach(fn, option);
      this.right && this.right.depthFirstForEach(fn, option);
    } else if (option === 'post-order') {
      this.left && this.left.depthFirstForEach(fn, option);
      this.right && this.right.depthFirstForEach(fn, option);
      fn(this.value);
    }
  };
  
  /* otra forma de hacer depthFirstForEach
  BinarySearchTree.prototype.depthFirstForEach = function(fn, type = 'in-order') {
     if (type === 'pre-order') fn(this.value);
     this.left && this.left.depthFirstForEach(fn, type);
     if (type === 'in-order') fn(this.value);
     this.right && this.right.depthFirstForEach(fn, type);
     if (type === 'post-order') fn(this.value);
 };
 */
  BinarySearchTree.prototype.breadthFirstForEach = function(fn, queue = []) {
    fn(this.value);
    this.left && queue.push(this.left);
    this.right && queue.push(this.right);
    if (queue.length) queue.shift().breadthFirstForEach(fn, queue);
  };
  
  BinarySearchTree.prototype.size = function() {
    var size = 1;
    if (this.right) size += this.right.size();
    if (this.left) size += this.left.size();
    return size;
  };

/*
 otra forma de resolverlo 

function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.counter = 1;
}

BinarySearchTree.prototype.insert = function(value){
    if(value < this.value && this.left){
        this.counter++
        return this.left.insert(value)
    }
    if(value > this.value && this.right){
        this.counter++
        return this.right.insert(value)
    }
    if(value < this.value){
        this.left = new BinarySearchTree(value)
    } else{
        this.right = new BinarySearchTree(value)
    }
    
    this.counter++
}

BinarySearchTree.prototype.contains = function(value){
    //is the same recursion change few things
    if(value < this.value && this.left){
        return this.left.contains(value)
    }
    if(value > this.value && this.right){
        return this.right.contains(value)
    }

    if(value === this.value){
        return true;
    }
    
    return false;
}



BinarySearchTree.prototype.depthFirstForEach = function(fn, type = "in-order"){
    if(type === 'in-order'){
        if(this.left){
            this.left.depthFirstForEach(fn)
        }
        fn(this.value)
        if(this.right){
            this.right.depthFirstForEach(fn)
        }
    }
    if(type === 'pre-order'){
        fn(this.value)
        if(this.left){
            this.left.depthFirstForEach(fn, 'pre-order')
        }
        if(this.right){
            this.right.depthFirstForEach(fn, 'pre-order')
        }
    }
    if(type === 'post-order'){
        if(this.left){
            this.left.depthFirstForEach(fn, 'post-order')
        }
        if(this.right){
            this.right.depthFirstForEach(fn, 'post-order')
        }
        fn(this.value)
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function(fn, arr ){
    
    //basicamente acá la recursion la hacemos sobre un array externo que creamos, donde vamos guardando los hijos y la clave 
    //es ir shifteando , de esa forma vamos a haciendo el efecto breath y avanzando...
    

    if(!arr){
        var arr = []
        arr.push(this)
    }
    
    if(this.left){
        arr.push(this.left)
    }
    if(this.right){
        arr.push(this.right)
    }

    fn(arr[0].value, arr)
    arr.shift()    
    
    if(arr.length > 0){
        arr[0].breadthFirstForEach(fn, arr)
    }
   
    
}

BinarySearchTree.prototype.size = function(){
    return this.counter;
}
*/