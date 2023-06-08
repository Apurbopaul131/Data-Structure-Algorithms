const prompt = require("prompt-sync")();
let a = prompt();
a = parseInt(a);
let b = prompt();
b = parseInt(b);
function euclidianGCD(a,b){
    if(b == 0){
        return a;
    }
    let remainder = a % b;
    return euclidianGCD(b,remainder);//recursive call
    
}
console.log(euclidianGCD(a,b));