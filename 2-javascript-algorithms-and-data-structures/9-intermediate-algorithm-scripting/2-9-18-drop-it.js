
function dropElements(arr, func) {
  // Drop them elements.
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log(arr);
  while (func(arr[0]) === false) {
    if (arr.length > 0) {
      arr.shift();
    }
    else {
      break;
    }
  }
  console.log(arr);
  return arr;
}
