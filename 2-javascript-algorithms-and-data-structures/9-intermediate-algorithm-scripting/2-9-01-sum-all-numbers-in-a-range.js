
function sumAll(arr) {
  let sortedArr = arr.sort((a,b) => a > b);
  let sumOfAll = 0;
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sumOfAll += i;
  }
  return sumOfAll;
}

sumAll([1, 4]);
