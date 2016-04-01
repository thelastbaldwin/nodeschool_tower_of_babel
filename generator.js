
const max = process.argv[2];
let FizzBuzz = function*(){
    let cur = 1;
     while(cur <= max){
      let result = cur;
      if( cur % 3 === 0 && cur % 5 === 0){
       result = "FizzBuzz";
      } else if(cur % 3 === 0){
       result = "Fizz"; 
      } else if(cur % 5 === 0){
        result = "Buzz";
      }  
      cur++;
      yield result;
    }
}();


for (var n of FizzBuzz){
  console.log(n);
}
