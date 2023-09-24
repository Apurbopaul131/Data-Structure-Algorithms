const bubbleSort = (nums) =>{
    const n = nums.length;
    for(let i=0;i<n;i++){
        let j=0;
        while(j<n-i-1){
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
            j++;
        }
        
    }
    return nums;
}
const numbers = [8,2,4,1,5];
bubbleSort(numbers);