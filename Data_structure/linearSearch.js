// linear search algorithms
const numbers = [100,20,30,125,177,199,2000,5000,700];
const n = 200;
let flag = -1;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === n){
        flag = i+1;
        break;
    }
}
if(flag == -1){
    console.log(`${n} is not found.`);
}
else{
    console.log(`${n} is found at position ${flag}.`);
}
