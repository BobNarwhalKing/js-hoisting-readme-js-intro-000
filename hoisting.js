function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}
function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
    thisIsCrazy();
  }
}
function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  name = "Kristin";
  function sayMy() {
    console.log(name);
  sayMy();
  }
}
sayMyName()
