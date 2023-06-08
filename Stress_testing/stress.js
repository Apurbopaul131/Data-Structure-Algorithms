function maxPairwiseProductFast(numbers){
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

function maxPairwiseProductNaive(nums){
    const numsLen = nums.length;
    let bigNumber = nums[0] * nums[1];
    if(numsLen == 2){
        return bigNumber;
    }
    else{
        for(let i = 0;i < numsLen; i++){
            for(let j = i+1; j < numsLen; j++){
               
                if(bigNumber < nums[i] * nums[j] && nums[i] != nums[j]){
                    bigNumber = nums[i] * nums[j];
                }
            }
            
        }
    }
    return bigNumber;
}

function generateRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function stressTest(N,M){
    while(true){
        const x = generateRandom(2,N);
        console.log(x);
        const a = [];
        for(let i = 0; i < x;i++){
            a.push(generateRandom(0,M));
        }
        console.log(a);
        const resOne = maxPairwiseProductFast(a);
        const resTwo = maxPairwiseProductNaive(a);
        if(resOne == resTwo){
            console.log("Ok");
        }
        else{
            console.log(`Wrong answer ${resOne} and ${resTwo}`);
            break;
        }
    }
}
const N = 5;
const M = 9;
stressTest(N,M);


