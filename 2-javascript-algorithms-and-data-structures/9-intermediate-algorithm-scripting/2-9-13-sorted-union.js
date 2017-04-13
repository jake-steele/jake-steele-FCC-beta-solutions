
function uniteUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (newArr.includes(arguments[i][j]) === false) {
        newArr.push(arguments[i][j]);
      }
    }
  }
  console.log(newArr);
  return newArr;
}
