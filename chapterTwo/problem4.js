var partition = function(list, partitionValue){
  var checkNode = list.head;

  while (checkNode){
    if (checkNode.next && checkNode.next.value < partitionValue){
      var nodeToMove = checkNode.next;
      checkNode.next = nodeToMove.next.next;
      nodeToMove.next = list.head;
      list.head = nodeToMove;
    } else {
      checkNode = checkNode.next;    
    }
  }

  return list;
};

module.exports = partition;