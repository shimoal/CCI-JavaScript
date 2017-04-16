var oneAway = function(s1, s2){
  var foundDifference = false;

  var lengthDifference = Math.abs(s1.length - s2.length);
  if ( lengthDifference > 1){
    return false;
  }

  var longer = s1.length > s2.length ? s1 : s2;
  var shorter = s1.length > s2.length ? s2 : s1;

  for (var longerIndex = 0, shorterIndex = 0; longerIndex < longer.length; longerIndex++, shorterIndex++){

    if (longer.charAt(longerIndex) !== shorter.charAt(shorterIndex)){
      if (foundDifference) {
        return false;
      }

      foundDifference = true;

      if (lengthDifference > 0){
        shorterIndex--;
      }

    }
    
  }

  return true;

};

module.exports = oneAway;