
// USING QUEUE
describe('Un queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('tiene los metodos `enqueue`, `dequeue`, y `size`', function() {
    expect(typeof queue.enqueue).toBe('function');
    expect(typeof queue.dequeue).toBe('function');
    expect(typeof queue.size).toBe('function');
  });

  it('tiene size 0 inicialmente', function() {
    expect(queue.size()).toBe(0);
  });

  it('incrementa en size cuando agregamos items', function() {
    queue.enqueue('first in line');
    expect(queue.size()).toBe(1);
  });

  it('decrementa en size cuando removemos elementos', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.dequeue();
    expect(queue.size()).toBe(2);
  });


  it('devuelve el item correcto cuando dequeeamos', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.size()).toBe(3);
    expect(queue.dequeue()).toBe('first');
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe('second');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe('third');
    expect(queue.size()).toBe(0);
  });

  it('maneja bien el underflow, cuando no hay elementos dequeue devuelve undefined', function() {
    queue.enqueue('first in line');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe('first in line');
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
  });

  it('maneja bien varios enqueue y dequeue', function(){
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    queue.enqueue(4);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(undefined);
  });


  it('agrega y remueve sus propios items', function(){
    var q2 = new Queue();
    queue.enqueue('fullstack');
    q2.enqueue('JavaScript');
    expect(q2.dequeue()).toBe('JavaScript');
    expect(q2.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe('fullstack');
    expect(queue.dequeue()).toBe(undefined);
  });

});



/* OLD JESUS TEST */
// USING LIST
//replace enqueue with addToTail
//replace dequeue por removeHead

//first conclution is that in list we have some more details methods, like adding things to the end or the first place so it allows to do more things
/*
describe('Un queue', function() {
  var list;

  beforeEach(function() {
    list = new LinkedList();
  });

  it('tiene los metodos `addToTail`, `removeHead`, y `size`', function() {
      console.log(typeof list.size)
    expect(typeof list.addToTail).toBe('function');
    expect(typeof list.removeHead).toBe('function');
    expect(typeof list.size).toBe('function');
  });

  it('tiene size 0 inicialmente', function() {
    expect(list.size()).toBe(0);
  });

  it('incrementa en size cuando agregamos items', function() {
    list.addToTail('first in line');
    expect(list.size()).toBe(1);
  });

  it('decrementa en size cuando removemos elementos', function() {
    list.addToTail('first');
    list.addToTail('second');
    list.addToTail('third');
    list.removeHead();
    expect(list.size()).toBe(2);
    
  });


  it('devuelve el item correcto cuando dequeeamos', function() {
    list.addToTail('first');
    list.addToTail('second');
    list.addToTail('third');
    expect(list.size()).toBe(3);
    expect(list.removeHead()).toBe('first');
    expect(list.size()).toBe(2);
    expect(list.removeHead()).toBe('second');
    expect(list.size()).toBe(1);
    expect(list.removeHead()).toBe('third');
    expect(list.size()).toBe(0);
  });

  it('maneja bien el underflow, cuando no hay elementos removeHead devuelve undefined', function() {
    list.addToTail('first in line');
    expect(list.size()).toBe(1);
    expect(list.removeHead()).toBe('first in line');
    expect(list.size()).toBe(0);
    expect(list.removeHead()).toBe(undefined);
    expect(list.size()).toBe(0);
    expect(list.removeHead()).toBe(undefined);
    expect(list.size()).toBe(0);
  });

  it('maneja bien varios addToTail y removeHead', function(){
    list.addToTail(1);
    expect(list.removeHead()).toBe(1);
    list.addToTail(2);
    list.addToTail(3);
    expect(list.removeHead()).toBe(2);
    list.addToTail(4);
    expect(list.removeHead()).toBe(3);
    expect(list.removeHead()).toBe(4);
    expect(list.removeHead()).toBe(undefined);
  });


  it('agrega y remueve sus propios items', function(){
    var q2 = new LinkedList();
    list.addToTail('fullstack');
    q2.addToTail('JavaScript');
    expect(q2.removeHead()).toBe('JavaScript');
    expect(q2.removeHead()).toBe(undefined);
    expect(list.removeHead()).toBe('fullstack');
    expect(list.removeHead()).toBe(undefined);
  });

});
*/