<<<<<<< HEAD
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

  // =================
  // CONTRIBUTED SOLUTION
  // if(str === ""){
  //   return str 
  // }else{
  //   return reverseString(str.substr(1)) + str[0]
  // }
  // .... BY Yusuf Delvi
  // https://github.com/yusuf-delvi
  // ==================

  // =================
  // CONTRIBUTED SOLUTION
  // let arr = [...str];
  //
  // return arr.reduce((accumulator, currentValue, currentIndex, array) => {
  //     return accumulator + array[array.length - currentIndex - 1];
  // }, "");
  // .... BY Jawad Mohammad
  // https://github.com/jawadiut
  // ==================
  
  // =================
  // CONTRIBUTED SOLUTION
  // by Gamze Erol
  // return [...str].reverse().join('');  
  // =================
  
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

  // CONTRIBUTED SOLUTION
  // for (i=0; i<str.length/2; i++) {
  //     if (str[i]!== str[str.length-i-1]) {
  //         return false;
  //     }
  // }
  //
  // return true;
  // .... BY Jawad Mohammad
  // https://github.com/jawadiut
  
  // =================
  // CONTRIBUTED SOLUTION
  // by Gamze Erol
  // return str == reverseString(str);
  // =================
  
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
   // CONTRIBUTED SOLUTION
   // BY Abdulahi Roble
   // Github: abdu020
   // function reverseInt(int) {
   // const revNumber = int
   //    .split("")
   //    .reverse()
   //    .map(function(t) {
   //      return parseInt(t);
   //    });
   //  return revNumber;
   // }
  
   // =====================
   // CONTRIBUTED SOLUTION
   // by Gamze Erol
   //return parseInt([...int.toString()].reverse().join(''));
   // =====================
  
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // CONTRIBUTED SOLUTION
    // By Flinchy

    // let splitStr = str.split(' ');
    // let newStr = [];
    // let firstLetter, capitalizeFirstLetter, word, capitalizeWord;

    // for(let i = 0; i < splitStr.length; i++) {      
    //     word = splitStr[i];
    //     firstLetter = word[0];
    //     capitalizeFirstLetter = firstLetter.toUpperCase();
    //     capitalizeWord = word.replace(firstLetter, capitalizeFirstLetter);
    //     newStr.push(capitalizeWord);
    // }
    // return newStr.join(' ');
    // ==========================
    // CONTRIBUTED SOLUTION
    // by Gamze Erol
    //return str.split(' ').map(s => 
    //    s[0].toUpperCase() + s.substring(1)).join(' ');
    //===============================
    
}

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
}

//Solution by Naomi Sharp
//Fixes bug in above solution for which the string "socks" would not work. This is because
//the char "s" is the last one in the array sortedStr so the code to store maxChar does not run.

function maxCharacter(str) {
  // const sortedStr = str.split('').sort();
  // const maxChar = {char: '', count: 0};
  // const currentChar = {char: '', count: 0};
  
  // sortedStr.forEach(char => {
  //   if(currentChar.char === char){
  //     currentChar.count++;
  //     if(maxChar.count < currentChar.count){
  //       maxChar.char = currentChar.char;
  //       maxChar.count = currentChar.count;
  //     }
  //     currentChar.char = char;
  //     currentChar.count = 0;
  //   } else {
  //     currentChar.char = char;
  //     currentChar.count = 1;
  //   }
  // });
  
  // return maxChar.char;
  }

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  //CONTRIBUTED SOLUTION
  // By Devesh
  // let c3 = 0;
  // let c5 = 0;
  //   for(let i = 1; i <= 100 ; i++){
  //       c3++;
  //       c5++;
  //       let d = '';
  //       if(c3 == 3){
  //           d += 'Fizz';
  //           c3 = 0;
  //       }
  //       if(c5 == 5){
  //           d += 'Buzz';
  //           c5 = 0;
  //       }
  //       if(d == ''){
  //           console.log(i);
  //       }else{
  //           console.log(d);
  //       }  
  //   }
  
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
}

// Call Function
const output = reverseString('hello');

console.log(output);
=======
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
  // CONTRIBUTED SOLUTION
  // BY James Robinson
  // if (str.length === 1) {
  //   return str[0];
  // } else {
  //   return reverseString(str.slice(1)) + str[0];
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
  // BY Bedirhan Dincer
  // const charMap = {};
  // str
  //   .split('')
  //   .forEach(char => (charMap[char] = charMap[char] ? charMap[char] + 1 : 1));
  // return Math.max(...Object.keys(charMap).map(char => charMap[char]));
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
  
  // CONTRIBUTED SOLUTION
  // By Ashish S
  // for (let i = 1; i < 101; i++) {
  //   let a = i % 3 ? (i % 5 ? i : 'Buzz') : i % 5 ? 'Fizz' : 'FizzBuzz';
  //   console.log(a);
  // }
  
  // CONTRIBUTED SOLUTION
  // By Gamze Erol
    //  for(i = 1; i<=100; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');        
    //     else if (i % 3 === 0) console.log('Fizz');
    //     else if (i % 5 === 0) console.log('Buzz');        
    //     else console.log(i);         
    // }
  
}

// Call Function
const output = reverseString('hello');

console.log(output);
>>>>>>> e8090fea1d9fe2c208a8f8ce4cc46be9f287b108
