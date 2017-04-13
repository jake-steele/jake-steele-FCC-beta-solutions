
function convertToRoman(num) {
  let funcNum = num;
  let romanNum = [];
  let romanFunc = function(value, romEq) {
    if (funcNum >= value) {
      while (funcNum >= value) {
        funcNum -= value;
        romanNum.push(romEq);
      }
    }
  };
  romanFunc(1000, "M");
  romanFunc(500, "D");
  romanFunc(100, "C");
  romanFunc(50, "L");
  romanFunc(10, "X");
  romanFunc(5, "V");
  romanFunc(1, "I");
  for (let i = 0; i < romanNum.length - 2; i++) {
    if (romanNum[i] === "D" && romanNum[i + 1] === "C" && romanNum[i + 2] === "C" && romanNum[i + 3] === "C" && romanNum[i + 4] === "C") {
      romanNum[i] = "CM";
      romanNum.splice(i + 1, 4);
    }
    if (romanNum[i] === "C" && romanNum[i + 1] === "C" && romanNum[i + 2] === "C" && romanNum[i + 3] === "C") {
      romanNum[i] = "CD";
      romanNum.splice(i + 1, 3);
    }
    else if (romanNum[i] === "L" && romanNum[i + 1] === "X" && romanNum[i + 2] === "X" && romanNum[i + 3] === "X" && romanNum[i + 4] === "X") {
      romanNum[i] = "XC";
      romanNum.splice(i + 1, 4);
    }
    else if (romanNum[i] === "X" && romanNum[i + 1] === "X" && romanNum[i + 2] === "X" && romanNum[i + 3] === "X") {
      romanNum[i] = "XL";
      romanNum.splice(i + 1, 3);
    }
    else if (romanNum[i] === "V" && romanNum[i + 1] === "I" && romanNum[i + 2] === "I" && romanNum[i + 3] === "I" && romanNum[i + 4] === "I") {
      romanNum[i] = "IX";
      romanNum.splice(i + 1, 4);
    }
    else if (romanNum[i] === "I" && romanNum[i + 1] === "I" && romanNum[i + 2] === "I" && romanNum[i + 3] === "I") {
      romanNum[i] = "IV";
      romanNum.splice(i + 1, 3);
    }
  }
  console.log(funcNum);
  console.log(romanNum);
  console.log(romanNum.join(""));
  return romanNum.join("");
}

convertToRoman(36);
