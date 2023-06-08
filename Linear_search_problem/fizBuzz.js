const n = 3;
function fizzProblem(num){
    let numbers = [];
    for(let i = 1;i <= num; i++){
        numbers[i-1] = `${i}`;
    }
    for(let j=0;j<numbers.length;j++){
        let everyNum = parseInt(numbers[j]);
        if(everyNum % 3 == 0 && everyNum % 5 == 0){
            numbers[j] = "fizzBuzz";
        }
        else if(everyNum % 3 == 0){
            numbers[j] = "Fizz";
        }
        else if(everyNum % 5 == 0){
            numbers[j] = "Buzz";
        }
    }
    return numbers;
}
console.log(fizzProblem(n));