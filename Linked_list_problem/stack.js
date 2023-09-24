class Stack {
    constructor(data, max) {
        this.data = data;
        this.max = max;
    }
    push(item) {
        let currentSize = this.data.length;
        if (currentSize >= this.max) {
            alert('Stack is full can not be added '+item);
        }
        this.data[currentSize] = item;
        currentSize++;
        console.log(this.data);
    }
    pop(){
        let currentPosition = this.data.length;
        if(currentPosition === 0){
            console.log("Stack is empty...");
        }
        else{
            currentPosition--;
            this.data.length = currentPosition;
        }
    }
    popSpecific(delItem){
        let currentPosition = this.data.length;
        let counter = 0;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]===delItem){
                currentPosition = currentPosition-counter+1;
                this.data.length = currentPosition;
                break;
                
            }
            else{
                counter++;
            }
        }
        console.log(this.data);
    }
}
const stackOne = new Stack([], 5);
stackOne.push(10);
stackOne.push(20);
stackOne.push(30);
stackOne.push(40);
stackOne.push(50);
stackOne.popSpecific(40);