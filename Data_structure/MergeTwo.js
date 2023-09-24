const MergeSingleSortedArray = (nums,low,mid,high)=>{
    const auxilaryArray = [];
    let i = low;
    let j = mid;
    let k = 0;
    const m = mid;
    const n = high;
    while(i<m && j<n){
        if(nums[i]<nums[j]){
            auxilaryArray[k++] = nums[i++];
        }
        else{
            auxilaryArray[k++] = nums[j++];
        }
    }
    while(i<m){
        auxilaryArray[k++] = nums[i++];
    }
    while(j<n){
        auxilaryArray[k++] = nums[j++];
    }
    for(i=0;i<high;i++){
        nums[i] = auxilaryArray[i];
    }
    return nums;
}
const numbers = [77,102,165,85,93,95];
const l = 0;
const h = numbers.length;
const mid = parseInt((l+h) / 2);
console.log(MergeSingleSortedArray(numbers,l,mid,h));