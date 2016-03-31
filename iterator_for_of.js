const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator](){
    let cur = 1;
    return {
      next(){
       if(cur <= max){
        let result = cur;
        if( cur % 3 === 0 && cur % 5 === 0){
         result = "FizzBuzz";
        } else if(cur % 3 === 0){
         result = "Fizz"; 
        } else if(cur % 5 === 0){
          result = "Buzz";
        }  
        cur++;
        return { done: false, value: result};
      }
      return {done: true};
      }
    }
  }
}


for (var n of FizzBuzz){
  console.log(n);
}
