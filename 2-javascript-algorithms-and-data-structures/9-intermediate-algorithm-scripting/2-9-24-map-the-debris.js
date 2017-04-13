
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (let i = 0; i < arr.length; i++) {
    console.log("Line 6 - i = " + i + " avgAlt: " + arr[i].avgAlt);
    let semiMajor = arr[i].avgAlt + earthRadius;
    console.log("Line 8 - semiMajor: " + semiMajor);
    let newOrbitalPeriod = Math.pow(semiMajor, 3);
    console.log("Line 10 - newOrbitalPeriod: " + newOrbitalPeriod);
    newOrbitalPeriod *= 4;
    console.log("Line 12 - newOrbitalPeriod: " + newOrbitalPeriod);
    newOrbitalPeriod *= Math.pow(3.1415926, 2);
    console.log("Line 14 - newOrbitalPeriod: " + newOrbitalPeriod);
    newOrbitalPeriod /= GM;
    console.log("Line 16 - newOrbitalPeriod: " + newOrbitalPeriod);
    newOrbitalPeriod = Math.sqrt(newOrbitalPeriod);
    console.log("Line 18 - newOrbitalPeriod: " + newOrbitalPeriod);
    arr[i].orbitalPeriod = Math.round(newOrbitalPeriod);
    delete arr[i].avgAlt;
    console.log(arr[i]);
  }
  return arr;
}