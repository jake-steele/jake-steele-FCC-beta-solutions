
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  let strArr = [...str];
  let wordsArrArr = [];
  console.log("Line 10 - str followed by strArr: ");
  console.log(str);
  console.log(strArr);
  let wordStartInd = [0];
  let exciseInd = [];
  for (let i = 1; i < strArr.length; i++) {
    if (/[A-Z]|\W|_/g.test(strArr[i])) {
      if (/[A-Z]/.test(strArr[i])) {
        wordStartInd.push(i);
      }
      else if (/\W|_/.test(strArr[i])) {
        wordStartInd.push(i+1);
        exciseInd.push(i);
      }
    }
  }
  for (let i = 0; i < wordStartInd.length; i++) {
    let appearances = 1;
    for (let j = i + 1; j < wordStartInd.length; j++) {
      if (wordStartInd[j] === wordStartInd[i]) {
        appearances++;
      }
    }
    if (appearances > 1) {
      wordStartInd.splice(i, 1);
      i--;
    }
  }
  console.log("Line 38 - wordStartInd and exciseInd initialized, duplicate wordStarts removed. wordStartInd followed by exciseInd: ");
  console.log(wordStartInd);
  console.log(exciseInd);
  for (let i = 0; i < exciseInd.length; i++) {
    for (let j = 0; j < wordStartInd.length; j++) {
      if (wordStartInd[j] > exciseInd[i]) {
        wordStartInd[j]--;
      }
    }
    for (let j = i + 1; j < exciseInd.length; j++) {
      exciseInd[j]--;
    }
    strArr.splice(exciseInd[i], 1);
  }
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toLowerCase();
  }
  console.log("Line 55 - wordStartInd corrected for spliced-out exciseInd. ExciseInd values corrected according to already-removed exciseInds. StrArr spliced to remove exciseInd and converted to lowercase. strArr followed by wordStartInd followed by exciseInd: ");
  console.log(strArr);
  console.log(wordStartInd);
  console.log(exciseInd);
  for (let i = 0; i < wordStartInd.length; i++) {
    console.log(wordStartInd[i]);
    if (i === wordStartInd.length - 1) {
      console.log("route A");
      wordsArrArr.push(strArr.slice(wordStartInd[i], strArr.length));
    }
    else {
      console.log("route B");
      wordsArrArr.push(strArr.slice(wordStartInd[i], wordStartInd[i + 1]));
    }
  }
  console.log("Line 70 - wordsArrArr initialized with arrays for each word according to slices of strArr, based off of wordStartInd values. wordStartInd followed by wordsArrArr: ");
  console.log(wordStartInd);
  console.log(wordsArrArr);
  let wordsArr = [];
  for (let i = 0; i < wordsArrArr.length; i++) {
    wordsArr.push(wordsArrArr[i].join(""));
  }
  console.log("wordsArr initialized and each second-dimension array from wordsArrArr joined to form a word, then pushed to wordsArr. wordsArr: ");
  console.log(wordsArr);
  let result = wordsArr.join("-");
  console.log("Line 79 - result initialized as a joining of the words from wordsArr, using a separator of \"-\". result: ");
  console.log(result);
  return result;
}