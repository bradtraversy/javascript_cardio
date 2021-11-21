////// INSTRUCTIONS /////
// ADD YOUR SOLUTIONS HERE
// COMMENT YOUR SOLUTION OUT BEFORE YOU MAKE A PULL REQUEST
// ADD "SOLUTION BY [YOUR NAME]"

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    // SOLUTION BY Jawad Mohammad
    // return arr.reduce((acc, cv, ci, array) => {
    //     if (ci % len === 0 ) {
    //         acc.push(array.slice(ci, ci+len));
    //     }
    //     return acc;
    // }, []);
    
    // ----- SOLUTION BY Jon Bodnar ----- //
    // const chunked = [];
    // while (arr.length) {
    //     chunked.push(arr.splice(0, len));
    // }
    // return chunked;
    // ----- END ----- // 
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // SOLUTION BY Jawad Mohammad
    // return arrays.reduce((acc, cv) => {
    //     acc.push(...cv);
    //     return acc;
    // }, []);
}

// SOLUTION by VeNoM to flattenArray
const flattenArrayRecursive = (arr = [], flatArray = []) => {
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            flattenArrayRecursive(element, flatArray)
        } else {
            flatArray.push(element)
        }
    })
    return flatArray
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord("Hello there, my name is Brad");

console.log(output);
////// INSTRUCTIONS /////
// ADD YOUR SOLUTIONS HERE
// COMMENT YOUR SOLUTION OUT BEFORE YOU MAKE A PULL REQUEST
// ADD "SOLUTION BY [YOUR NAME]"

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
  // SOLUTION BY @aweebit
  //
  // let maxLetters = 0;
  // let outputArr = [];
  // sen.toLowerCase()
  //   .match(/\w+/g)
  //   .forEach(word => {
  //     if (!(word.length < maxLetters)) {
  //       if (word.length > maxLetters) {
  //         maxLetters = word.length;
  //         outputArr = [];
  //       }
  //       outputArr.push(word);
  //     }
  //   });
  // return outputArr.length > 1 ? outputArr : outputArr[0];
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION BY @mattmccherry
  //    let i=0, output = [], currArr = [];
  //
  //    arr.forEach(element => {
  //        currArr.push(element);
  //        i++;
  //        if (i%len === 0 || i === arr.length) {
  //            output.push(currArr);
  //            currArr = [];
  //            }
  //        });
  //    return output;
  // SOLUTION ADDED BY @mattmccherry from https://30secondsofcode.org/#chunk
  //
  // return Array.from({ length: Math.ceil(arr.length / len) }, (v, i) =>
  // arr.slice(i * len, i * len + len)
  // );

  // SOLUTION BY @jerryakpera
  // const chunks = []

  // while (arr.length >= len) {
  //   chunks.push(arr.splice(0, len))
  // }
  // chunks.push(arr.splice(0))
  // return chunks
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // SOLUTION BY colebearski
  //
  // return arrays.flat();
  //
  // SOLUTION BY @mattmccherry
  //
  // return arrays.reduce((arr, nums) => [...arr, ...nums], []);
  // SOLUTION BY patryklkakol:
  // return arrays
  //     .join()
  //     .split(',')
  //     .map(a => +a || a);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  // SOLUTION BY @aweebit
  // // Practically the same, but within one statement and with a few enhancements
  // return str.toLowerCase().replace(/[a-z]/g, char => (
  //   char == 'z' ? 'A' : String.fromCharCode(char.charCodeAt() + 1)
  // )).replace(/[aeiou]/g, vowel => vowel.toUpperCase());
}

// Call Function
const output = longestWord("Hello there, my name is Brad");

console.log(output);
