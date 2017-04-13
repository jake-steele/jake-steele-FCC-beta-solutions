
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let testArr1 = [];
  let testArr2 = [];
  for (let i = (str.length - 1) - target.length; i < str.length; i++) {
    testArr1.push(str[i]);
    testArr2.push(target[target.length - (i + 1)] + " " + (str.length - (i + 1)));
  }
  console.log(testArr1);
  console.log(testArr2);
  return str;
}

confirmEnding("Bastian", "n");
