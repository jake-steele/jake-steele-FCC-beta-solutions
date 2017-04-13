
function binaryAgent(str) {
  // Might come back to tackle this with String.fromCharCode ...?
  let binaryChar = [" ", "!","'",".","?","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let binaryNum = ["00100000","00100001","00100111","00101110","00111111","01000001","01000010","01000011","01000100","01000101","01000110","01000111","01001000","01001001","01001010","01001011","01001100","01001101","01001110","01001111","01010000","01010001","01010010","01010011","01010100","01010101","01010110","01010111","01011000","01011001","01011010","01100001","01100010","01100011","01100100","01100101","01100110","01100111","01101000","01101001","01101010","01101011","01101100","01101101","01101110","01101111","01110000","01110001","01110010","01110011","01110100","01110101","01110110","01110111","01111000","01111001","01111010"];
  let binaryWordArr = [];
  let currentWord = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      currentWord += str[i];
      binaryWordArr.push(currentWord);
    }
    else if (str[i] !== " ") {
      currentWord += str[i];
    }
    else {
      binaryWordArr.push(currentWord);
      currentWord = "";
    }
  }
  console.log(currentWord);
  
  console.log(binaryWordArr);
  
  let result = "";
  for (let i = 0; i < binaryWordArr.length; i++) {
    for (let j = 0; j < binaryNum.length; j++) {
      if (binaryWordArr[i] === binaryNum[j]) {
        result += binaryChar[j];
      }
    }
  }
  
  console.log(result);
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
