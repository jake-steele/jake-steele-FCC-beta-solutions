
function pairElement(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") {
      newArr.push(["G", "C"]);
    }
    else if (str[i] === "C") {
      newArr.push(["C", "G"]);
    }
    else if (str[i] === "A") {
      newArr.push(["A", "T"]);
    }
    else {
      newArr.push(["T", "A"]);
    }
  }
  return newArr;
}

pairElement("GCG");
