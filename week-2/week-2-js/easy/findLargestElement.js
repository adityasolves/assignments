/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
// DONE

function findLargestElement(numbers) {
    let a=numbers[0]
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index]>a){
            a=numbers[index]
        }
    }
    console.log(a);
    return a
}

module.exports = findLargestElement;