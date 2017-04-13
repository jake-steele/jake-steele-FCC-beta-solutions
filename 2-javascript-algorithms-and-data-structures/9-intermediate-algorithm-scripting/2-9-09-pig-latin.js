
function translatePigLatin(str) {
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  let strArr = [...str];
  if (/[aeiou]/i.test(strArr[0])) {
    strArr.push("w", "a", "y");
  }
  else if (/[aeiou]/i.test(strArr)) {
    let firstVowelInd = 0;
    for (let i = 0; i < strArr.length; i++) {
      if (firstVowelInd === 0 && /[aeiou]/i.test(strArr[i])) {
        firstVowelInd = i;
      }
    }
    strArr.push((strArr.splice(0, (firstVowelInd))).join(""));
    strArr.push("ay");
    console.log("found vowel at index: " + firstVowelInd);
  }
  else {
    strArr.push("ay");
  }
  console.log(strArr);
  
  let result = strArr.join("");
  console.log("result: " + result);
  return result;
}
