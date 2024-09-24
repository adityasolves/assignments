/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
// DONE

function countVowels(str) {
  // Your code here
  vowels=['a', 'e', 'i', 'o', 'u']
  count=0
  str = str.toLowerCase()
  for (let index = 0; index < str.length; index++) {
    
    if(vowels.includes(str[index])){
      count=count+1
    }
  }
  console.log(count);
  
  return count

}
countVowels('rhythm')

module.exports = countVowels;