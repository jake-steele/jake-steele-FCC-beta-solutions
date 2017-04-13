
function sumFibs(num) {
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  let fibArr = [1, 1];
  for (let i = 2; i <= num; i++) {
    // noprotect
    if (fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2] === i) {
      fibArr.push(i);
    }
  }
  console.log(num);
  console.log(fibArr);
  let oddFibArr = [];
  for (let i = 0; i < fibArr.length; i++) {
    if (fibArr[i] % 2 !== 0) {
      oddFibArr.push(fibArr[i]);
    }
  }
  console.log(oddFibArr);
  let fibSum = oddFibArr.reduce(function (acc, val) {return acc + val;}, 0);
  console.log(fibSum);
  return fibSum;
}

sumFibs(4);
