const insertionSort = (numbers) => {
  for(let i=1;i<numbers.length;i++){
    let j = i-1;
    while(j>=0 && numbers[j]>numbers[j+1]){
        const temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
        j--;
    }
    console.log(numbers);
  }
  
}
const nums = [5,2,3,1,4];
insertionSort(nums);