let s = [];
let squares = [];
let endingInOne = [];
let reflections = [];
let productsArray = [];
let productsArrayNoDupes = [];

// Takes an input that is greater than zero and less than 100,000 and returns any number that is divisbile by 19 with no remainder
// Pushes the numbers onto an array 's'.
const findS = (num) => {
  if (num > 0 && num < 100000) {
    for (i=1;i<=num;i++) {
      if (i % 19 === 0) {
        s.push(i);
        }
    } 
  } else {
      console.log('That number is invalid.');
      }
}

// Takes the array 's' and multiplies each number against itself to find the square. Could also use Math.pow(s[i],2).
// Pushes all the squared numbers to a new array "squares"
const findSquares = (s) => {
  for (i=0;i<=s.length;i++) {
    squares.push(s[i]*s[i]);
  }
}

// Checks the "squares" array for any numbers ending with 1 by dividing each number in the array by 10 and looking for a remainder of 1
// If there is a remainder of 1, it gets pushed onto a new array called endingInOne
const checkForOne = (squares) => {
  for (i=0;i<=squares.length;i++) {
    if (squares[i] % 10 === 1) {
      endingInOne.push(squares[i]);
    }
  }
}

// Used to reverse number given as an input
const reverseNumber = (num) => {
  num = num + "";
  return parseInt(num.split("").reverse().join(""));
}


// Checks array for numbers with their reflection in the array by reversing number and then checking it against numbers in the array
// It then pushes it into a new array "reflections"
const reflectionCheck = (array) => {
  for (i=0;i<=array.length;i++) {
    for (j=0;j<=array.length;j++){
      if (reverseNumber(array[i]) === array[j]) {
        reflections.push(array[i]);
      }
    }
  }
}

//  Runs the array of numbers against itself until the product is greater than 100000. If the product is below 100000, it will push itself 
// onto the productsArray. The issue is then there are double in the array of lot of the same numbers. 
const findProducts = (array) => {
  for (i=0;i<=array.length;i++) {
    for (j=0;j<=array.length;j++) {
      num = array[i] * array[j]
      if (num < 100000) {
      productsArray.push(array[j]);
      } else {
        break
      }
    }
  }
}

// Enter the array productsArray as an argument and it will remove all duplicates and creates a new array that will have the numbers that
// that can multiply with other numebrs in productsArray and the product is also in productsArray. The new array with no duplicates is
// productsArrayNoDupes
const removeDuplicates = (array) => {
  for (i=0;i<array.length;i++) {
    if (productsArrayNoDupes.indexOf(array[i]) === -1) {
      productsArrayNoDupes.push(array[i])
    }
  }
}