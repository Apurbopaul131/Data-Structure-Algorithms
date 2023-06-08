// This solution is too slow because same callculation will be repeated
const prompt = require("prompt-sync")();
let n = prompt();
n = parseInt(n);
function fiboRecurs(number){
    if(number <= 1){
        return number;
    }
    else{
        return fiboRecurs(number - 1) + fiboRecurs(number - 2);
    }
}
console.log(fiboRecurs(n));