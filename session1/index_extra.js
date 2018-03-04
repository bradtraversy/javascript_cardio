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
  
//SOLUTION BY BLESSING TAYEDZERWA [everbliss7@gmail.com]
//WITHOUT THE JOIN() METHOD
//     var strArray = str.split("");
//     var strArrayReversed = [];
//     var i;
//     var len = strArray.length; 
//     for(i = 0; i <= len; i++) {
//         strArrayReversed[i] = strArray[(len-1) - i];
//     }
//     var stringed = stringfy(strArrayReversed);

//HELPER FUNCTION 
// function stringfy(arrayedString) {
//     var word = "";
//     for(var j = 0; j < arrayedString.length - 1; j++) {
//         word += arrayedString[j];
//     }
//     return word;
// }
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

//CONTRIBUTED SOLUTION BY BLESSING TAYEDZERWA [everbliss7@gmail.com]
function isPalindrom2(word) {
//     var revd = "";
//     for(var i = 0; i < word.length; i++) {
//         revd = word[i] + revd;
//     }
//     if(revd === word) {
//         console.log(word+": is a Palindrom.");
//     }
//     else {
//         console.log(word+": is not a Palindrom.");
//     }
}

isPalindrom2("pop");

////CONTRIBUTED SOLUTION BY BLESSING TAYEDZERWA [everbliss7@gmail.com] WITH HELPER FUNCTIONS
function isPalindrom3(word) {
//     if((word.length % 2) == 0) {
//         evenPalindrom(word);
//     }
//     else if(word.length % 2 == 1) {
//         oddPalindrom(word);
//     }
// }
// //even palindrom word
    function evenPalindrom(word) {
//     var firstHalf = word.slice(0, (word.length/2));
//     var lastHalf  = word.slice((word.length/2));
//     var reversedLastHalf = lastHalf.split('').reverse().join('');
//     if(firstHalf === reversedLastHalf) {
//         console.log(word+": is a Palindrom.");
//     }
//     else {
//         console.log(word+": is not a Palindrom.");
//     }
    }
// //odd palindrom word
    function oddPalindrom(word) {
//     var len = word.length;
//     var lenOver2 = len/2;
//     var firstHalf2 = word.slice(0, lenOver2 - 0.5);
//     var lastHalf2  = word.slice(lenOver2 + 0.5);
//     var lastHalf2Reversed = lastHalf2.split('').reverse().join('');
//     if(lastHalf2Reversed === firstHalf2) {
//         console.log(word+": is a Palindrom.");
//     }
//     else {
//         console.log(word+": is not a Palindrom.");
       }
}

isPalindrom3('nooooooon');

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
 // CONTRIBUTED SOLUTION BY BLESSING TAYEDZERWA [everbliss7@gmail.com] everbliss7@gmail.com
 //Capitalize every first letter of every word in a sentence
//     var strArrayed = str.toLowerCase().split(' ');
//     var strArrayedNew = "";
//     for(var i = 0; i < strArrayed.length; i++) {
        
//         for(var j = 0; j < strArrayed[i].length; j++) {
//             if(strArrayed[i].length == 1) {
//                 strArrayedNew += strArrayed[i][j].toUpperCase();
//                 strArrayedNew += " ";
//                 continue;
//             }
//             if(j == 0) {
//                 strArrayedNew += strArrayed[i][j].toUpperCase();
//                 continue;
//             }
//             if(j == strArrayed[i].length -1) {
//                 strArrayedNew += strArrayed[i][j];
//                 strArrayedNew += " ";
//                 continue;
//             }
//             strArrayedNew += strArrayed[i][j];
//         }
//     }
//     console.log(strArrayedNew);
}
capitalizeLetters("i love javascript and node js");

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
