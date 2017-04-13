
function steamrollArray(arr) {
  // I'm a steamroller, baby
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("FUNCTION START! FUNCTION START! FUNCTION START! FUNCTION START!");
  console.log("Original arr:");
  console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j])) {
          for (let k = 0; k < arr[i][j].length; k++) {
            if (Array.isArray(arr[i][j][k])) {
              for (let l = 0; l < arr[i][j][k].length; l++) {
                if (Array.isArray(arr[i][j][k][l])) {
                  for (let m = 0; m < arr[i][j][k][l].length; m++) {
                    if (Array.isArray(arr[i][j][k][l][m])) {
                      for (let n = 0; n < arr[i][j][k][l][m].length; n++) {
                        if (Array.isArray(arr[i][j][k][l][m][n])) {
                          for (let o = 0; o < arr[i][j][k][l][m][n].length; o++) {
                            console.log("Element of Seventh-Level Array added to newArr!");
                            newArr.push(arr[i][j][k][l][m][n][o]);
                          }
                        }
                        else {
                          console.log("Element of Sixth-Level Array added to newArr!");
                          newArr.push(arr[i][j][k][l][m][n]);
                        }
                      }
                    }
                    else {
                      console.log("Element of Fifth-Level Array added to newArr!");
                      newArr.push(arr[i][j][k][l][m]);
                    }
                  }
                }
                else {
                  console.log("Element of Fourth-Level Array added to newArr!");
                  newArr.push(arr[i][j][k][l]);
                }
              }
            }
            else {
              console.log("Element of Third-Level Array added to newArr!");
              newArr.push(arr[i][j][k]);
            }
          }
        }
        else {
          console.log("Element of Second-Level Array added to newArr!");
          newArr.push(arr[i][j]);
        }
      }
    }
    else {
      console.log("Element of First-Level Array added to newArr!");
      newArr.push(arr[i]);
    }
  }
  console.log("newArr:");
  console.log(newArr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
