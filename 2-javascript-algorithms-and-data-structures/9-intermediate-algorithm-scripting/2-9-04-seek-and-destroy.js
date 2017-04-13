
function destroyer(arr) {
  // Remove all the values
  let removalIndices = [];
  let newArr = [...arr];
  console.log("arr: " + newArr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        removalIndices.push(i);
      }
    }
  }
  console.log(removalIndices);
  for (let i = 0; i < removalIndices.length; i++) {
    newArr.splice(removalIndices[i], 1);
    for (let j = 0; j < removalIndices.length; j++) {
      removalIndices[j]--;
    }
  }
  console.log("newArr: " + newArr);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
