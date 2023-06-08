/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. 
The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 */
// linear serch used for find the x element
const linearSearch = (array,searchElement) =>{
    const len = array.length;
    for(let i=0;i<len;i++){
        const value = array[i];
        if(value === searchElement){
            return i;
        }
    }
    return -1;
}
//selaction sort used for sorted 
const selactionSort = (array) => {
    const len = array.length;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}


const kColsestElement = (array,k,x) => {
    const found = linearSearch(array,x);
    let left = found - 1;
    let right = found + 1;
    while(k>1){
        // edge case of the program
        if(right===array.length){
            //sorted before retrun the ouput array because ouput will also be sorted
            return selactionSort(array.slice(found-k+1,right));
        }
        if(left >= 0 && right < array.length){
            const val = array[found];
            const preDiff = Math.abs(array[left] - val);
            const nextDiff = Math.abs(array[right] - val);
            if(preDiff === nextDiff || preDiff < nextDiff){
                left--;
            }
            else{
                right++;
            }
        }
        k--;
    }
    //sorted before retrun the ouput array because ouput will also be sorted
    return selactionSort(array.slice(left+1,right));
}
console.log(kColsestElement([6,2,5,4,3,1,7,8],4,4));