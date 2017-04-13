
function rot13(str) { // LBH QVQ VG!
  let alphaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let strArr = [...str];
  for (let i = 0; i < strArr.length; i++) {
    if (/\w/.test(strArr[i])) {
      strArr[i] = alphaArr["NOPQRSTUVWXYZABCDEFGHIJKLM".search(strArr[i])];
    }
  }
  console.log(strArr.join(""));
  return strArr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
