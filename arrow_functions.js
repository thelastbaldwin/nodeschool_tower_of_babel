var inputs = process.argv.slice(2);
var result = inputs.map((word)=>{
  return word[0];
}).reduce((prev, curr)=>{
  return prev + curr;
});

console.log(result);
