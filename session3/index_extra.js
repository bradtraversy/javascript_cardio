////// INSTRUCTIONS /////
// ADD YOUR SOLUTIONS HERE
// COMMENT YOUR SOLUTION OUT BEFORE YOU MAKE A PULL REQUEST
// ADD "SOLUTION BY [YOUR NAME]"

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes() {}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {
// SOLUTION BY Smollet777
// filtering out and sorting all "humans"
// const humans = a.filter(v => v !== -1).sort((a, b) => a - b)
// put sorted "humans" back
// return a.map(v => v !== -1? humans.shift() : -1)
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  const start = 'a'.charCodeAt()
  const end = 'z'.charCodeAt()

  // Generate the Valid Letters according to the test
  let validLetters = [];
  for (i = start; i <= end; i++) {
    validLetters.push(String.fromCharCode(i))
  }

  // arrayfy the given parameter letters
  const letters = str.split('');
  // initialize an empty array of the missing letters
  let missing = [];

  // traverse through the validLetters
  validLetters.forEach(letter => {
    // if a valid letter is not in the item,
    // push it to the `missing` variable
    if (!letters.includes(letter)) {
      missing.push(letter);
    }
  });

  // Checks if missing filled, else return undefined
  return missing.length ? missing : undefined;
}

const letters = 'abcdefghijkmnoprstuvwxyz'
console.log('Missing: ' + missingLetters(letters)) // `Missing: l, q`;


// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
