const prompt = require("prompt-sync")();
function maxPairwiseProductNaive(nums){
    const numsLen = nums.length;
    let bigNumber = nums[0] * nums[1];
    for(let i = 0;i < numsLen; i++){
        for(let j = i+1; j < numsLen; j++){
            if(bigNumber < nums[i] * nums[j] && nums[i] != nums[j]){
                bigNumber = nums[i] * nums[j];
            }
        }
        
    }
    return bigNumber;
}
// const numbers = [5,8,11,3,9];

// const numbersLen = numbers.length;


let numbers = [];
let n = prompt();
n = parseInt(n);
for(let i = 0;i < n; i++){
    numbers[i] = parseInt(prompt());
    
}
console.log(maxPairwiseProductNaive(numbers));
// [
//     95028, 67888,
//     48450, 36274,
//     95028, 46851,
//     26352, 11771,
//     12126
//   ]
// Wrong answer 6451260864 and 9030320784
