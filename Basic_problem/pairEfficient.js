// Callculate max pairwise product
const prompt = require("prompt-sync")();

function PairWiseMultipleEfficiant(numbers){
    const n = numbers.length;
    numbers.sort(function(a,b){
        return b-a;
    });
    
    
    for (let i = 1; i < n; i++) {
        if (numbers[i] != numbers[0]) {
          second_largest = numbers[i];
          break;
        }
      }
      const maxPairWiseProduct = numbers[0] * second_largest;
      return maxPairWiseProduct;
}

let numbers = [];
let n = prompt();
n = parseInt(n);
for(let i = 0;i < n; i++){
    numbers[i] = parseInt(prompt());
    
}
console.log(PairWiseMultipleEfficiant(numbers));