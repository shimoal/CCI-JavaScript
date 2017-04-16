var chai = require('chai');
var expect = chai.expect;
var Stack = require('./Stack.js');
var MyQueue = require('./problem4.js');

describe('Stack', function() {
  var stack = new Stack();
  it ('should be a function', function() {
    expect(Stack).to.be.a('function');
  });

  it('should accept new values', function(){
    stack.push(1);
    stack.push(2);
    expect(stack.size).to.equal(2);
  });

  it('should pop off values in LIFO order', function() {
    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(1);
    expect(stack.size).to.equal(0);
  });
});

describe('4. MyQueue', function() {
  var newMyQueue = new MyQueue();

  it ('has an isEmpty method that returns true for an empty queue', function() {
    expect(newMyQueue.isEmpty()).to.be.true;
  });

  it ('has an isEmpty method that returns false for an non-empty queue', function() {
    newMyQueue.add(1);
    expect(newMyQueue.isEmpty()).to.be.false;
  });

  it('has an add method that increases the size', function() {
    expect(newMyQueue.size).to.equal(1);
  });

  it('has a remove method that returns a value', function() {
    expect(newMyQueue.remove()).to.equal(1);
  });

  it('has a remove method that returns values in FIFO order', function() {
    newMyQueue.add(1);
    newMyQueue.add(2);
    newMyQueue.add(3);
    newMyQueue.add(4);
    expect(newMyQueue.remove()).to.equal(1);
    expect(newMyQueue.remove()).to.equal(2);
    expect(newMyQueue.remove()).to.equal(3);
    newMyQueue.add(5);
    newMyQueue.add(6);
    expect(newMyQueue.remove()).to.equal(4);
  });

  it('has a peek method that returns the front of the queue but doesn\'t remove it', function() {
    expect(newMyQueue.size).to.equal(2);
    expect(newMyQueue.peek()).to.equal(5);
    expect(newMyQueue.size).to.equal(2);
  })
});