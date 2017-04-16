var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(val){
  this.value = val;
  this.next = null;
}

LinkedList.prototype.addToTail = function(value){
  var node = new Node(value);

  if (!this.head){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}

LinkedList.prototype.removeHead = function(value){
  this.head = this.head.next;
}

module.exports = LinkedList;