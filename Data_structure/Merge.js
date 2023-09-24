const Merge = (listOne,listTwo,m,n) => {
    const listThree = [];
    let j = 0;
    let i = 0;
    let k = 0;
    while(i<m && j<n){
        if(listOne[i] <= listTwo[j]){
            listThree[k++] = listOne[i++];
        }
        else{
            listThree[k++] = listTwo[j++];
        }
    }
    while(i<m){
        listThree[k++] = listOne[i++];
    }
    while(j<n){
        listThree[k++] = listTwo[j++];
    }
    return listThree;
}


const firstArray = [10,12,20,22,25,27];
const seccondArray =[9,11,19,23,24,28];
const fLength = firstArray.length;
const sLength = seccondArray.length;
console.log(Merge(firstArray,seccondArray,fLength,sLength));
