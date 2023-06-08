const n = 30;
let count = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        count++
    }
}
console.log("Count:"+count);
// when input size is 20 then output will be 400.
// When input size is 30 then output will be 900
// that means output will be changed with input size
// Time complexity: O(1)+O(1)+O(n^2) = O(n^2)
