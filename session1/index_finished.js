// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  //////////////////////////

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  /////////////////////////

  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  ////////////////////////

  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  ///////////////////////

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  //////////////////////
  
  
  //let arr = [...str];
  //let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  //return newArr.join("");



  return str.split('').reduce((revString, char) => char + revString, '');
}


// Reversing a string without using built-in function
// Contributed by - Ankita Patil

function reverseString(str) {
  let reversedString = "";
  
  for(character of str) {
    reversedString = character + reversedString;
  }
  
  return reversedString;
}

// Another solution to reverse a string
// Contributed by Ankita Patil

function reverseString(str) {
  return str.split("").reduce((reversedString, character) => character + reversedString, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');

  return revString === str;

  ///////////////////////

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

//  shortest one
//  function isPal(s) {
//    return s.split('').reverse().join('') === s;
//  }



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');

  // for(let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }

  // return strArr.join(' ');

  /////////////////////////////

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  /////////////////////////////

  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap) {
    // debugger;
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;


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
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
//   for(let i = 1; i <= 100; i++) {
//     if(i % 15 === 0) {
//       console.log('FizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('Fizz');
//     } else if(i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }

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
  for(var i = 1; i <= 100; i++) {
    let output = '';
    if(i % 3 === 0) {
      output += 'fizz';
    }
    if(i % 5 === 0) {
      output += 'buzz';
    }
    console.log(output || i);
  }
}



// Call Function
const output = fizzBuzz();

console.log(output);


// Solution 2
// Author: Ankita Patil
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";

    if(i % 3 === 0) {
      output += 'Fizz';
    }

    if(i % 5 === 0) {
      output += 'Buzz';
    }

    if(output === "") {
      output = i;
    }

    console.log(output);

}
}

console.log(fizzBuzz());
