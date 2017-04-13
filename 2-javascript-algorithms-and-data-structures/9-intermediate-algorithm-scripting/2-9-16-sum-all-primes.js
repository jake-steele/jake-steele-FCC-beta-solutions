
function sumPrimes(num) {
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  let primeArr = [];
  for (let i = 2; i <= num; i++) {
    let divisors = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisors++;
      }
    }
    if (divisors === 2) {
      console.log("Prime number found! " + i);
      primeArr.push(i);
    }
  }
  console.log("primeArr: " + primeArr);
  let result = primeArr.reduce(function(acc, val) {return acc + val;}, 0);
  return result;
}

sumPrimes(10);
