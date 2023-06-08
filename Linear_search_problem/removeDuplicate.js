const numbers = [1,2,3,4,5,1,3,10];
const removeDuplicate = (numsArray) => {
    const dupArray = [];
    for(let i=0; i<numsArray.length-1; i++)//O(n)
    {
        for(let j=i+1; j<numsArray.length; j++)//O(n)
        {
            if(numsArray[i] === numsArray[j]){
                dupArray.push(numsArray[i]);
                break;
            }
        }
    }
    const removeDup = numsArray.filter((item) => {
        if(!dupArray.includes(item)){
            return item;
        }
    })
    return removeDup;
}
console.log(removeDuplicate(numbers));