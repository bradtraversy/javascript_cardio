// Challenge 1: reverse a string
const reverseString = (str) => {
  // reverses the str parameter .
  let string = str.split("").reverse().join("");
  // return's string in reverse.
  return string
};

console.log(reverseString("Josep"));


// Challenge 2: Validate a Palindrome
// Return true if palindrome and false if not
const palindrome = (str) => {
  // Reverses the string parameter
  let reverseOrder = str.split("").reverse().join("");
  // String in its normal syntax
  let normalOrder = str;
  // check if string is = to the reverse order
  let result = reverseOrder === normalOrder ? true : false;
  return result;
};

console.log(palindrome("racecar"));


// Challenge 3: Reverse Integer
// Return an integer in reverse
const reverseInt = (int) => {
  let numbers = int.toString().split('').reverse().join('');
  // return's numbers in reverse.
  return Number(numbers);
};

console.log(reverseInt(12345));


// Challenge 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
const capitalizeWords = (str) => {
  return str.toLowerCase().split(" ").map((word) => {
    return word[0].toUpperCase() + word.substr(1);
  }).join(" ");

};

console.log(capitalizeWords("i love javascript with all my heart"));

// Challenge 5: Max Character
// Return the character that is most common in a string
const maxCharacter = (str) => {
  const characterMp = {};
  let maxNumber = 0,
    maxChar = '';
  str.split('').forEach(char => {
    characterMp[char] ? characterMp[char]++ : characterMp[char] = 1;
  });

  for (let char in characterMp) {
    if (characterMp[char] > maxNumber) {
      maxNumber = characterMp[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxCharacter("javascript"));

// Challenge 6: Fizzbuzz
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = () => {
  for (i = 0; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(`${i} FIZZBUZ`);
    } else if (i % 3 === 0) {
      console.log(`${i} FIZZ`);
    } else if (i % 5 === 0) {
      console.log(`${i} BUZZ`);
    } else {
      console.log(`${i}`);
    }
  }
};

console.log(fizzBuzz());