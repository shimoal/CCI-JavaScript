var chai = require('chai');
var expect = chai.expect;
var partition = require('./problem4.js');
var LinkedList = require('./LinkedList.js');

describe('LinkedList', function() {
  var list = new LinkedList();
  it('should be a function', function() {
    expect(LinkedList).to.be.a('function');
  });

  it('should have an add to tail method', function() {

    expect(list.addToTail).to.be.a('function');
  });

  it('should add new values with add to tail method', function() {
    list.addToTail(1);
    expect(list.tail.value).to.equal(1);
    expect(list.head.value).to.equal(1);
    list.addToTail(2);
    expect(list.tail.value).to.equal(2);
  })
});

describe('4. partition', function() {
  var partitionList = new LinkedList();
  partitionList.addToTail(3);
  partitionList.addToTail(5);
  partitionList.addToTail(8);
  partitionList.addToTail(10);
  partitionList.addToTail(2);
  partitionList.addToTail(1);
  partitionList.addToTail(5);

  it ('should be a function', function() {
    expect(partition).to.be.a('function');
  });

  it('should return a LinkedList', function() {
    expect(partition(partitionList, 5)).to.be.an('object');
    expect(partition(partitionList, 5).head).to.not.be.undefined;
    expect(partition(partitionList, 5).tail).to.not.be.undefined;
  });

  it('should end with a less than partition at the end', function() {
    expect(partition(partitionList, 5).head.value).to.equal(3);
  });
});