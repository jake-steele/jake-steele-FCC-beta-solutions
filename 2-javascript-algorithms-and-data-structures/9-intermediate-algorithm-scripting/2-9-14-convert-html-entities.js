
function convertHTML(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "&") {
      newStr += "&amp;";
    }
    else if (str[i] === "<") {
      newStr += "&lt;";
    }
    else if (str[i] === ">") {
      newStr += "&gt;";
    }
    else if (str[i] === "\"") {
      newStr += "&quot;";
    }
    else if (str[i] === "'") {
      newStr += "&apos;";
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}

convertHTML("Dolce & Gabbana");
