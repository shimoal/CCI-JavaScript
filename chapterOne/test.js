var chai = require('chai');
var expect = chai.expect;
var oneAway = require('./problem5.js');
var stringCompression = require('./problem6.js');

describe('Problem One', function() {

});

describe('Problem Two', function() {

});

describe('Problem Three', function() {

});

describe('Problem Four', function() {

});

describe('5. oneAway', function() {
  it ('should be a function', function(){
    expect(oneAway).to.be.a('function');
  });

  it('should return true for strings that are an insert away', function() {
    expect(oneAway('pale', 'ple')).to.be.true;
  });

  it('should return true for strings that are a deletion away', function() {
    expect(oneAway('pales', 'pale')).to.be.true;
  });

  it('should return true for strings that are a replacement away', function() {
    expect(oneAway('pale', 'bale')).to.be.true;
  });

  it('should return false for strings that are more than one edit away', function() {
    expect(oneAway('pale', 'bake')).to.be.false;
  });
});

describe('6. stringCompression', function() {
  it('should be a function', function(){
    expect(stringCompression).to.be.a('function');
  });

  it('should return a compressed string', function() {
    expect(stringCompression('aaabcccccaaa')).to.equal('a3b1c5a3');
  });

  it('should return the origin string if shorter than the compressed string', function() {
    expect(stringCompression('abcde')).to.equal('abcde');
  });
});

describe('Problem Seven', function() {

});

describe('Problem Eight', function() {

});