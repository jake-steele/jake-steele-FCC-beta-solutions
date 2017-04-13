
function findLongestWord(str) {
  let allWordsArray = []; // Full words should be placed in this array at separate indices
  let currentWord = [];
  let longestWord = 0;
  for (let i = 0; i < str.length; i++) { // For each letter in the string...
    if (str[i] === " ") {
      allWordsArray.push((currentWord.join("")).length);
      currentWord = [];
    }
    else if (i === (str.length - 1)) {
      currentWord.push(str[i]);
      allWordsArray.push((currentWord.join("")).length);
      currentWord = [];
    }
    else {
      currentWord.push(str[i]);
    }
  }
  for (let i = 0; i < allWordsArray.length; i++) {
    if (allWordsArray[i] > longestWord) {
      longestWord = allWordsArray[i];
    }
  }
  console.log(longestWord);
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
