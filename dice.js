var rolls = Number(process.argv.slice(2));
var output = [];
// console.log(rolls);

for (var i = 0; i < rolls; i++) {
  let num = Math.floor(Math.random() * Math.floor(6)) + 1
  // console.log(num);
  output.push(num);
  // console.log(output);
}
output = output.join(", ");
console.log("Rolled " + rolls + " dice: " + output);