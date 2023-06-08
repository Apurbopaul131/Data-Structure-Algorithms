const numbers = [2,7,5,8,10,12];
const swap = (anArray,l,r) => {
    const temp = anArray[r];
    anArray[r] = anArray[l];
    anArray[l] = temp;
}
const segregateNew = numsArray => {
    let left = 0;
    let right = numsArray.length - 1;
    while(left < right){
        if(numsArray[left] % 2 === 0){
            left++;
            continue;
        }
        if(numsArray[right] % 2 !== 0){
            right--;
            continue;
        }
        swap(numsArray,left,right);
    }
    return numsArray;
}
console.log(segregateNew(numbers));