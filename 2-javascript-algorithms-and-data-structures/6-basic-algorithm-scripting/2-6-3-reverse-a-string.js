
function reverseString(str) {
  let revStr = [];
  for (i = (str.length - 1); i >= 0; i--) {
    revStr.push(str[i]);
  }
  revStr = revStr.join("");
  console.log(revStr);
  return revStr;
}

reverseString("hello");
