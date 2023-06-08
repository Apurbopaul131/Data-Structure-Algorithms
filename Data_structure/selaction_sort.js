const numbers = [10,5,2,8,7];
const selactionSort = (numsArray) =>{
    for(let i = 0; i < numsArray.length - 1; i++){
        for(let j = i + 1; j < numsArray.length; j++){
            if(numsArray[i] > numsArray[j]){
                let temp = numsArray[i];
                numsArray[i] = numsArray[j];
                numsArray[j] = temp;
            }
        }
        
    }
    // Firsly sorted an array using selaction sort
    // then apply binary search to find the number
    console.log(numsArray); //sorted array
    const numbersPosition = binarySearch(numsArray,7);
    return numbersPosition + 1;
}


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
const result = selactionSort(numbers);
console.log(result);
