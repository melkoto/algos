function flyBy(lamps, drone) {
  let res = "";
  let droneLength = drone.length;

  for (let i = 0; i < lamps.length; i++) {
    if (i < droneLength) res += "o";
    else res += "x";
  }
  return res;
}

console.log(flyBy("xxxxxx", "====T"));
console.log(flyBy("xxxxxxxxx", "==T"));
console.log(flyBy("xxxxxxxxxxxxxxx", "=========T"));
