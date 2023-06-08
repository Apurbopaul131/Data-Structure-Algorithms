const prompt = require("prompt-sync")();
let a = prompt();
a = parseInt(a);
let b = prompt();
b = parseInt(b);
function naiveGCD(num1,num2){
    let best = 0;
    for(let i = 1;i <= Math.min(num1,num2);i++){
        if(num1 % i == 0 && num2 % i == 0){
            best = i;
        }
        
    }
    return best;
}
const result = naiveGCD(a,b);
console.log(result);