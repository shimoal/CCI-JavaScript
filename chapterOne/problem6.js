var stringCompression = function(string){
  var charCounts = [];
  var currentChar = string.charAt(0);
  var currentCharCount = 0;

  for (var i = 0; i < string.length + 1; i++){
    if (string.charAt(i) === currentChar) {
      currentCharCount++;
    } else {
      charCounts.push(currentChar + currentCharCount);
      currentChar = string.charAt(i);
      currentCharCount = 1;
    }
  }

  if (charCounts.length * 2 > string.length) {
    return string;
  }

  return charCounts.join('');
};

module.exports = stringCompression;