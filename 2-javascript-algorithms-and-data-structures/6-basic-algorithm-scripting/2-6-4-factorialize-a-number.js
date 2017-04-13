
function factorialize(num) {
  let product = 1;
  if (num === 0) {
    return product;
  }
  else {
    for (let i = 1; i <= num; i++) {
      product *= i;
    }
  }
  return product;
}

factorialize(5);
