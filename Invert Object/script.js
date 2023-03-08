
function invert_key_value(obj) {
    // Write your code here
    var invertObj = {}
   for(const key in obj){
        invertObj[obj[key]] = key;
    }
    return invertObj;
  }

  console.log(
    invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
  ); // Expected output: {#FF0000: "red", #00FF00: "green", #FFFFFF: "white"}