const numbers = [144,135,122,117,111,100,99,85,77,65];
const n = 65;
const binarySearchResorted = (numArray,searchItem) =>{
    let left = 0;
    let right = numArray.length - 1;
    let mid = 0;
    let count = 0;
    while(left <= right){
        count++;
        mid = parseInt((left+right)/2);
        if(numArray[mid] == searchItem){
            return [mid+1,count];
        }
        else if(numArray[mid] > searchItem){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
        
    }

    return -1;
}
console.log("Position: "+binarySearchResorted(numbers,n));