const kColestElement = (array,k,x) =>{
    const xIndex = searchElement(array,x);
    let left = xIndex - 1;
    let right = xIndex + 1;
    const cloestArray = [];
    while(cloestArray.length < k){
        if(Math.abs(array[left] - array[xIndex]) < Math.abs(array[right] - array[xIndex])){
            cloestArray.push(array[left]);
            left--;
            continue;
        }
        if(Math.abs(array[left] - array[xIndex]) === Math.abs(array[right] - array[xIndex]) && array[left] < array[right]){
            cloestArray.push(array[left]);
            left--;
            continue;
        }
        if(Math.abs(array[left] - array[xIndex]) > Math.abs(array[right] - array[xIndex])){
            cloestArray.push(array[right]);
            right++;
            continue;
        }

    }
    console.log(cloestArray);
}

const searchElement = (array,x) =>{
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let mid = parseInt((left + right)/ 2);
        if(array[mid] === x){
            return mid;
        }
        else if(mid < x){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
    
}
// console.log();
kColestElement([1,2,3,4,5,6],2,4)