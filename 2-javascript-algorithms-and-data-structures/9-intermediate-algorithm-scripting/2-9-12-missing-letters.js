
function fearNotLetter(str) {
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let firstAlpha = alpha.indexOf(str[0]);
  let lastAlpha = alpha.indexOf(str[str.length - 1]);
  let missingLetter = "";
  console.log("firstAlpha: " + firstAlpha);
  console.log("lastAlpha: " + lastAlpha);
  for (let i = firstAlpha; i < lastAlpha; i++) {
    if (str[i - firstAlpha] !== alpha[i]) {
      missingLetter = alpha[i];
      console.log("Missing letter found! Missing Letter: " + missingLetter);
      return missingLetter;
    }
  }
  if (missingLetter === "") {
    return undefined;
  }
}

fearNotLetter("abce");
