
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source);
  console.log(sourceKeys);
  for (let i = 0; i < collection.length; i++) {
    let currMatch = 0;
    for (let j = 0; j < sourceKeys.length; j++) {
      console.log(source[sourceKeys[j]]);
      console.log(collection[i]);
      if (source[sourceKeys[j]] === collection[i][sourceKeys[j]]) {
        currMatch++;
      }
    }
    if (currMatch === sourceKeys.length) {
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
