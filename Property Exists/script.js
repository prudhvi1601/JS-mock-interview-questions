
function propExists1(a, b) {
  // a receives object, b receives property-name string
  //complete the function
  if(b in a){
    console.log(true);
  }
  else{
    console.log(false);
  }
}
function propExists2(a, b) {
  // a receives object, b receives property-name string
  //complete the function
  if(a.hasOwnProperty(b)){
    console.log(true);
  }
  else{
    console.log(false);
  }
}
console.log(propExists1({ x: "a", y: "b", z: "c" }, "a")); // output: false
console.log(propExists2({ x: "a", y: "b", z: "c" }, "a")); // output: false
console.log(propExists1({ a: 1, b: 2, c: 3 }, "b")); // output: true
console.log(propExists2({ a: 1, b: 2, c: 3 }, "b")); // output: true
console.log(propExists1({ x: "a", y: "b", z: undefined }, "z")); // output: true
console.log(propExists2({ x: "a", y: "b", z: undefined }, "z")); // output: true
 