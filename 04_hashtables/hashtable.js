function HashTable() {
    this.buckets = [];
    this.numBuckets = 35;
  }
  
  HashTable.prototype.set = function(key, value) {
    if (typeof key !== 'string') throw new TypeError('Keys must be strings');
    var hashedKey = this.hash(key);
    this.buckets[hashedKey] = this.buckets[hashedKey] || new LinkedList();
    this.buckets[hashedKey].addToHead({ key, value });
  };
  
  HashTable.prototype.get = function(key) {
    var hashedKey = this.hash(key);
    var found = this.buckets[hashedKey].search(function(obj) {
      return key === obj.key;
    });
    return found && found.value;
  };
  
  HashTable.prototype.hasKey = function(key) {
    if (this.get(key)) return true;
    return false;
  };
  
  HashTable.prototype.hash = function(value) {
    var total = 0;
    for (var i = 0; i < value.length; i++) {
      total += value[i].charCodeAt();
    }
    return total % this.numBuckets;
  };
  

/*
otra forma de resolverlo 

function HashTable (){
    this.numBuckets = 35;
    this.store = {}
}

HashTable.prototype.set = function(key, value){

    if(typeof key !== "string"){
        throw new TypeError('Keys must be strings');
    }

    this.store[key] = value
    
}

HashTable.prototype.get = function(key){
    return this.store[key]
}

HashTable.prototype.hasKey = function(key){
    if(this.store[key]){
        return true;
    }
    return false;
}

HashTable.prototype.hash = function(string){
    let sum = 0;
    for (var i = 0; i < string.length; i++) {
        sum += string.charAt(i).charCodeAt(0)
        //console.log(string.charAt(i)); //letter
    }
    return sum % this.numBuckets
}
*/
//String.fromCharCode(65) == "A"