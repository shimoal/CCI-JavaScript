var chai = require('chai');
var expect = chai.expect;
var partition = require('./problem4.js');
var LinkedList = require('./LinkedList.js');

describe('LinkedList', function() {
  it('should be a function', function() {
    expect('LinkedList').to.be.a('function');
  });

  it('should have an add to tail method', funciton() {
    var list = new LinkedList();
    expect(list.addToTail).to.be.a('string');
  });
});

describe('4. partition', function() {
  it ('should be a function', function() {
    expect(partition).to.be.a('string');
  });
});