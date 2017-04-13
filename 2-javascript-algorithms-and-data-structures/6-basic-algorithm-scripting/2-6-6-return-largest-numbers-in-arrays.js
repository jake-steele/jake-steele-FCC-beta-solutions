
function largestOfFour(arr) {
  // You can do this!
  for (let i = 0; i < arr.length; i++) {
    let currentArrayLargest = Number.NEGATIVE_INFINITY;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > currentArrayLargest) {
        currentArrayLargest = arr[i][j];
      }
    }
    arr[i] = currentArrayLargest;
    console.log(currentArrayLargest);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
