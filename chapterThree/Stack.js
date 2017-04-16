var Stack = function() {
  this.storage = {};
  this.size = 0;
};

Stack.prototype.push = function(value){
  this.size++;
  this.storage[this.size] = value;
  return value;
}

Stack.prototype.pop = function(value){
  var popped = this.storage[this.size];
  delete this.storage[this.size];
  this.size--;
  return popped;
}

Stack.prototype.peek = function() {
  return this.storage[this.size];
}

module.exports = Stack;