const prompt = require("prompt-sync")();
let n = prompt();
n = parseInt(n);
const fiboNumbers = [];
fiboNumbers[0] = 0;
fiboNumbers[1] = 1;
for(let i = 2;i <= n;i++){
    fiboNumbers[i] = fiboNumbers[i-1] + fiboNumbers[i-2];
}
console.log(fiboNumbers[n]);