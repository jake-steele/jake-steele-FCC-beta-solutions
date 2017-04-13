
function palindrome(str) {
  let lowerStr = str.toLowerCase();
  console.log("a lowerStr: " + lowerStr);
  lowerStr = lowerStr.replace(/[\W_]+/ig, "");
  let forwardStr = [...lowerStr];
  console.log("b forwardStr: " + forwardStr);
  let backwardStr = [];
  for (let i = forwardStr.length - 1; i >= 0; i--) {
    backwardStr.push(forwardStr[i]);
  }
  console.log("c forwardStr: " + forwardStr);
  console.log("d backwardStr: " + backwardStr);
  let palindromeScore = 0;
  for (let i = 0; i < forwardStr.length; i++) {
    if (forwardStr[i] === backwardStr[i]) {
      palindromeScore++;
    }
  }
  if (palindromeScore === forwardStr.length) {
    return true;
  }
  else {
    return false;
  }
}



palindrome("eye");
