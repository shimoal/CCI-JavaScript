var Stack = require('./Stack.js');

var MyQueue = function() {
  this.stackOne = new Stack();
  this.stackTwo = new Stack();
  this.size = 0;
};

MyQueue.prototype.add = function(value){
  this.size++;
  this.stackOne.push(value);
};

MyQueue.prototype.remove = function() {
  this.moveStacks();

  var popped = this.stackTwo.pop();
  this.size--;
  return popped;
};

MyQueue.prototype.moveStacks = function() {
  var popped;

  if (this.stackTwo.size === 0){
    while(this.stackOne.size > 0) {
      popped = this.stackOne.pop();
      this.stackTwo.push(popped);   
    }
  }

};

MyQueue.prototype.peek = function() {
  this.moveStacks();

  return this.stackTwo.peek();

};

MyQueue.prototype.isEmpty = function() {
  if (this.stackOne.size === 0 && this.stackTwo.size === 0) {
    return true;
  }

  return false;
};

module.exports = MyQueue;