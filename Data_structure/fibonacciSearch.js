const fibonacciSearch = (array,x) =>{
    const n = array.length;
    let offset = -1;
    let fm2 = 0;
    let fm1 = 1;
    let fm = fm2 + fm1;
    while(fm < n){
        fm2 = fm1;
        fm1 = fm;
        fm = fm2 + fm1;
    }
    // console.log(fm2,fm1,fm);
    while(fm>1){
        let i = Math.min(offset+fm2,n-1);
        if(array[i] === x){
            return i;
        }
        else if(array[i] < x){
            fm = fm1
            fm1 = fm2
            fm2 = fm - fm1
            offset = i
        }
        else{
            fm = fm2;
            fm1 = fm1 - fm2;
            fm2 = fm - fm1;
        }
    }
    
}
fibonacciSearch([10,12,17,20,25,28],10);