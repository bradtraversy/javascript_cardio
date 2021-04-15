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

//Solution by Ninos Shihale
//Fixes bug in above solutions for which the string "racecar" reports only the first letter "r" 
//but there are actually 3 sets of letters which are the exact amount "r,c,a".
function maxCharacters(str){
  // const charMap = {};
  // let max = 0;
  // let maxChar = '';
  // for (let char of str.toLowerCase()){
  //     if (!charMap[char]) charMap[char] = 1;
  //     else charMap[char]++;
  // }
  // for (let char in charMap){
  //     if (charMap[char] == max){
  //         max = charMap[char];
  //         maxChar += ','+char;
  //         continue;
  //     }
  //     if (charMap[char] > max){
  //         max = charMap[char];
  //         maxChar = char;
  //     }
  // }
  // return maxChar;
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
}

// Call Function
const output = reverseString('hello');

console.log(output);
