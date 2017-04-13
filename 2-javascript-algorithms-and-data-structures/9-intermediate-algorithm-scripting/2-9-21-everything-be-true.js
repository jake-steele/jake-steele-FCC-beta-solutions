
function truthCheck(collection, pre) {
  // Is everyone being true?
  console.log("NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN");
  console.log("NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN");
  console.log("NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN NEW RUN");
  let truthyTotal = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre)) { // Does collection[i] have the pre property?
      if (collection[i][pre]) { // Is the pre property truthy for collection[i]?
        console.log("collection[i][pre]: " + collection[i][pre]);
        truthyTotal++;
        console.log("truthyTotal: " + truthyTotal);
      }
    }
    else {
      console.log(" ");
      console.log("pre was not truthy for collection[" + i + "].");
      console.log(" ");
    }
  }
  if (truthyTotal === collection.length) { // If all objects in collection had a truthy pre prop...
    console.log("TRUE! TRUE! TRUE! TRUE! TRUE! TRUE! TRUE!");
    return true;
  }
  else {
    console.log("FALSE! FALSE! FALSE! FALSE! FALSE! FALSE!");
    return false;
  }
}