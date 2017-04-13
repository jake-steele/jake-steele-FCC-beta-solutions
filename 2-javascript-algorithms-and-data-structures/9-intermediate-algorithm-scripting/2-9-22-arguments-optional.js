let holdover = 0;
function addTogether() {
  holdover = 0;
  if (arguments.length === 1) {
    if (typeof arguments[0] === "number") {
      holdover += arguments[0];
      return function(n) {
        if ((typeof (holdover + n)) === "number") {
          console.log("A");
          console.log(holdover + n);
          return holdover + n;
        }
        else {
          console.log("B");
          console.log(undefined);
          return undefined;
        }
      };
    }
    else {
      console.log("C");
      console.log(undefined);
      return undefined;
    }
  }
  else if (arguments.length === 2) {
    if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
      console.log("D");
      console.log(arguments[0] + arguments[1]);
      return arguments[0] + arguments[1];
    }
    else {
      console.log("E");
      console.log(undefined);
      return undefined;
    }
  }
}

addTogether(2,3);
