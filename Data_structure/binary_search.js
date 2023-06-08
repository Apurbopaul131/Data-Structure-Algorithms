const numbers = [10,15,30,35,40,45,50,70,80,88,90];
const m = 11;
function binarySearch(numbersArray,x){
    const len = numbersArray.length;
    let left = 0;
    let right = len - 1;
    let mid;
    while(left <= right){
        mid = parseInt((left + right) / 2);
        if(numbersArray[mid] == x){
            return mid;
        }
        else if(numbersArray[mid] < x){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    } 
    return -1;
}
const result = binarySearch(numbers,m);
if(result == -1){
    console.log(`${m} is not found.`);
}
else{
    console.log(`${m} is found at position ${result+1}.`);
}


