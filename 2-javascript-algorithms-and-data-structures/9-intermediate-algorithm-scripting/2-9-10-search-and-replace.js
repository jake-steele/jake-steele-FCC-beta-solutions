
function myReplace(str, before, after) {
  let whitespaceInd = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      whitespaceInd.push(i);
    }
  }
  console.log("Line 10 - whitespaceInd generated. whitespaceInd: ");
  console.log(whitespaceInd);
  let wordsArr = [];
  wordsArr.push(str.slice(0, whitespaceInd[0]));
  for (let i = 0; i < whitespaceInd.length; i++) {
    if (i === whitespaceInd.length - 1) {
      wordsArr.push(str.slice((whitespaceInd[i] + 1), str.length));
    }
    else {
      wordsArr.push(str.slice((whitespaceInd[i] + 1), whitespaceInd[i+1]));
    }
  }
  console.log("Line 21 - wordsArr filled with str's words according to whitespaceInd. wordsArr: ");
  console.log(wordsArr);
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === before) {
      if (wordsArr[i][0] === wordsArr[i][0].toUpperCase()) {
        wordsArr[i] = after[0].toUpperCase() + after.slice(1, after.length);
      }
      else {
        wordsArr[i] = after;
      }
    }
  }
  console.log("Line 28 - wordsArr modified according to before/after. wordsArr: ");
  console.log(wordsArr);
  return wordsArr.join(" ");
}