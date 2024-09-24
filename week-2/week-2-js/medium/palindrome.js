/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
// partially done

function isPalindrome(str) {
  let rev=str.toLowerCase().split("").reverse().join('')
  if(str.toLowerCase()===rev){
    return true;
  }
  else{
    return false
  }
  console.log(rev);
  
  
}
isPalindrome('nab')

module.exports = isPalindrome;
