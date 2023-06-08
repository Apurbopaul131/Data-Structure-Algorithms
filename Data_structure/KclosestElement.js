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
const kColsestElement = (array,k,x) => {
    const found = linearSearch(array,x);
    let left = found - 1;
    let right = found + 1;
    while(k>1){
        if(r===array.length){
            return array.slice(found-k+1,r);
        }
    }
}
console.log(linearSearch([10,5,7,12,17],12));