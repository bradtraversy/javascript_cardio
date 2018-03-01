// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // CONTRIBUTED SOLUTION
  // let arr = [...str];
  // let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  // return newArr.join("");
  // CONTRIBUTED SOLUTION
  // BY Ankita Patil
  // return str.split("").reduce((reversedString, character) => character + reversedString, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // CONTRIBUTED SOLUTION
  //     let isPali = true;
  //     let caseStr = str.toLowerCase()
  //     let arr = caseStr.split('')
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] !== arr[arr.length -1 -i]){
  //             isPali = false;
  //             break;
  //         }
  //     }
  //     return isPali
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // CONTRIBUTED SOLUTION
  // Here is my version of the algorithm.
  // I put the string into an array and I sort it.
  // Then I loop through the array keeping track of the count for each character.
  // I keep track of the "current character" and the "max character" with objects.
  // const sortedStr = str.split('').sort();
  // const maxChar = {char: '', count: 0};
  // const currentChar = {char: '', count: 0};
  // sortedStr.forEach(char => {
  //   if(currentChar.char === char){
  //     currentChar.count++;
  //   } else {
  //     if(maxChar.count < currentChar.count){
  //       maxChar.char = currentChar.char;
  //       maxChar.count = currentChar.count;
  //     }
  //     currentChar.char = char;
  //     currentChar.count = 0;
  //   }
  // });
  // return maxChar.char;
  // CONTRIBUTED SOLUTION
  // BY Romain Guilloteau
  // let letters = {};
  // str
  //   .toLowerCase()
  //   .split('')
  //   .forEach(l => (letters[l] = letters[l] + 1 || 1));
  // const sortedLetters = Object.entries(letters)
  //   .sort((a, b) => a[1] - b[1])
  //   .map(a => a[0]);
  // return sortedLetters[sortedLetters.length - 1];
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  // CONTRIBUTED SOLUTION
  // for(let i = 1; i <= 100; i++) {
  //   let printNum=true;
  //    if(i % 3 === 0)
  //      console.log('Fizz');
  //    if(i % 5 === 0)
  //      console.log('Buzz');
  //   // if divisable by 3 then i%3 is zero,
  //   // if divisable by 5 then i%5 is zero,
  //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print
  //    printNum=((i%3*i%5)!==0);
  //   if(printNum) {
  //      console.log(i);
  //   }
  // }
  // CONTRIBUTED SOLUTION
  // for(var i = 1; i <= 100; i++) {
  //   let output = '';
  //   if(i % 3 === 0) {
  //     output += 'fizz';
  //   }
  //   if(i % 5 === 0) {
  //     output += 'buzz';
  //   }
  //   console.log(output || i);
  // }
  // CONTRIBUTED SOLUTION
  // BY Ankita Patil
  // for (let i = 1; i <= 100; i++) {
  //   let output = '';
  //   if (i % 3 === 0) {
  //     output += 'Fizz';
  //   }
  //   if (i % 5 === 0) {
  //     output += 'Buzz';
  //   }
  //   if (output === '') {
  //     output = i;
  //   }
  //   console.log(output);
  // }
  // CONTRIBUTED SOLUTION
  // BY Romain Guilloteau
  // for (let i = 1; i <= 100; i++) {
  //   console.log([
  //     (i % 3 === 0 ? 'Fizz' : ''),
  //     (i % 5 === 0 ? 'Buzz' : ''),
  //   ].join('') || i);
  // }
}

// Call Function
const output = reverseString('hello');

console.log(output);
