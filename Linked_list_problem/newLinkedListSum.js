class linkedList{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.tail = this.head;
        this.size = 1;
    }
    createNewNode(nodeData){
        let newNode = {
            value:nodeData,
            next:null
        }
        return newNode;
    }
    pushBack(nodeData){
        let createNode = this.createNewNode(nodeData);
        this.tail.next = createNode;
        this.tail = createNode;
        this.size = this.size + 1;
    }
    taversing(){
        let listArray = [];
        let counter = 0;
        let currentNode = this.head;
        while(counter < this.size){
            listArray.push(currentNode);
            currentNode = currentNode.next;
            counter++;
        }
        return listArray;
    }
    
 
}
function taversingSum(l1,l2){
    let counter = 0;
    let currentL1 = l1.head;
    let currentValueL1 = currentL1.value;
    let currentL2 = l2.head;
    let currentValueL2 = currentL2.value;
    let sum = 0;;
    let carry = 0;
    let newArray = [];
    
    while(counter < l1.size || counter < l2.size){
        currentValueL1 = currentL1.value;
        currentL1 = currentL1.next;
        currentValueL2 = currentL2.value;
        currentL2 = currentL2.next;
        if(currentValueL1 === null){
            currentValueL1 = 0;
        }
        if(currentValueL2 === null){
            currentValueL2 = 0;
        }
        sum = currentValueL1 + currentValueL2 + carry;
        if(sum>9){
            carry = parseInt(sum/10);
            sum = sum % 10;
            newArray.push(sum);
        }
        else{
            newArray.push(sum);
        }
        counter++;
    }
    console.log(newArray);
    // const newResultList = new linkedList(newArray[0])
    // for(let i=1;i<newArray.length;i++){
    //     newResultList.pushBack(newArray[i]);
    // }
    // return newResultList;
}
const listOne = new linkedList(9);
listOne.pushBack(9);
listOne.pushBack(9);
listOne.pushBack(9);
listOne.pushBack(9);
listOne.pushBack(9);
listOne.pushBack(9);
const listTwo = new linkedList(9);
listTwo.pushBack(9);
listTwo.pushBack(9);
listTwo.pushBack(9);
taversingSum(listOne,listTwo);
