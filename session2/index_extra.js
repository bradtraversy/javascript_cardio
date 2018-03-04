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

/////////////////LONGEST WORD/WORDS IN A SENTANCE///////////////////
//contributed solution by Blessing Tayedzerwa [everbliss7@gmail.com]
function longestWord(sentance) {
//     var sentanceArr = sentance.split(' ');
//     var longestStringLen = -Infinity;
//     var longStringIndex;
//     var longStrings = [];
    
//     //Loop through the arrayed strings in sentanceArr
//     for(var i = 0; i < sentanceArr.length; i++) {
//         if(longestStringLen <= sentanceArr[i].length) {
//             longestStringLen = sentanceArr[i].length;
//             longStringIndex  = i;
//             if(i == 0) {
//                 continue;
//             }
//             else if(sentanceArr[i-1].length < sentanceArr[i].length) {
//                 longStrings.pop(sentanceArr[i-1]);
//                 longStrings.push(sentanceArr[i]);
//             }
//         }
//     }
//    longStrings.forEach(function (string) {
//        console.log(string);
//    });
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
//CONTRIBUTED SOLUTION BY BLESSING TAYEDZERWA [everbliss7@gmail.com]
//     var chunksArray = [];
//     var arrayString = arr.join('');
//     var arrayLen    = arrayString.length;
//     var numChunks   = Math.floor(arrayLen / len);

//     for(var i = 0; i < numChunks; i++) {
//         chunksArray.push(arrayString.slice(0,len).split(''));
//         for(var j = 0; j <= len -1; j++) {
//             arr.shift(arr[j]);
//         }
//     }
//     chunksArray.push(arr);
//     return chunksArray;
}
console.log(chunkArray([1,2,3,4,5,6,7,8], 3));

//ARRAY CHUNKING 
// function chunkArray2(array, chunkLength) {
//     var chunksArray = [];
//     var arrayLen = array.length;
//     var numChunks = Math.floor(arrayLen / chunkLength);
    
//     for(var i = 0; i < numChunks; i++) {
//         chunksArray.push(array.splice(0,chunkLength));
//     }
//     if(array.length > 0) {chunksArray.push(array);}
//     return chunksArray;
// }
// console.log(chunkArray2([1,2,3,4,5,6,7,8], 2));
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

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
const output = longestWord('Hello there, my name is Brad');

console.log(output);

////////////////////LETTER CHANGE////////////////////////////
//CONTRIBUTED SOLUTION BY BLESSING TAYEDZERWA [everbliss7@gmail.com]
//Eg: 'Hello there' ==> 'ifmmp uifsf'
function letterChange(str) {
//     var alphabet = ['e','b','c','d','e','f', 'g','h','i','j','k','l','m','n','o',
//                'p','q','r','s','t','u','v','w','x','y','z'];
//     var changedLettersArray = [];
////declare an empty array for chars converted to unicode
//     var charCode = [];
////convert the string to an array with lowercase chars
//     var strArray = str.toLowerCase().split(' ');
////loop through each string in the array
//     for(var i = 0; i < strArray.length; i++) {
//// push a space char at the beginning of every string
//         charCode.push(' ');
////loop through every char in every string
//         for(var j = 0; j < strArray[i].length; j++) {
////if charCode resembles 'z' character then replace it with charCode for 'a'
//             if(strArray[i][j].charCodeAt(0) === 122)
//             {
//                 charCode.push(97);
//             }
//             else
//             {
////increment every charCode by  1
//                 charCode.push(strArray[i][j].charCodeAt(0) + 1);
//             }
//         }
//     }
////loop through charCode array   
//     for(var ii = 0; ii < charCode.length; ii++) {
////loop through the alphabet array
//         for(var jj = 0; jj < alphabet.length; jj++) {
//             if(charCode[ii] == " ") {
//                 changedLettersArray.push(" ");
//                 break;
//             }
////when charCode[ii] is equal to any charcode in the alphabet push that alphabet letter to the changedLetters array
//             if(charCode[ii] == alphabet[jj].charCodeAt(0)) {
//                 changedLettersArray.push(alphabet[jj]);
//             }
//         }
//     }
////change the changedLetters array to a string and trim any whitespace characters at the ends of the string
//     return changedLettersArray.join(' ').trim();

}
console.log(letterChange('Helloz! there'));