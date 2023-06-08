const numbers = [34,33,17,26,27,36,40];
const segerateNumber = numArray => {
    const dupNumArray = [...numArray];
    let countOdd = dupNumArray.length - 1;
    let countEven = 0;
    for(let i = 0;i < numArray.length; i++){
        if(numArray[i] % 2 == 0){
            dupNumArray[countEven++] = numArray[i];
        }
        else{
            dupNumArray[countOdd] = numArray[i];
            countOdd -= 1;
        }
        
    }
    return dupNumArray;
}
console.log(segerateNumber(numbers));
