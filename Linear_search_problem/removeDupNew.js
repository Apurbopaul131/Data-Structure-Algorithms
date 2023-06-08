const numbers = [1,2,3,4,5,1,3,5];
const removeDuplicateNew = (numsArray) =>{
    const mp = {};
    const n = numsArray.length;
    const dupNumArr = [];
    for(let i=0; i<n; i++){
        const val = numsArray[i];
        if(!mp[val]){
            mp[val] = true;
        }
        else{
            if(!dupNumArr.includes(val)){
                dupNumArr.push(val);
            }
        }
    }
    const resultArray = numsArray.filter((item) => {
        if(!dupNumArr.includes(item)){
            return item;
        }
    })
    return resultArray;
}
console.log(removeDuplicateNew(numbers));