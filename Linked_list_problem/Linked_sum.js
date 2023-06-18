/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
/**
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
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
function linkedListSum(listOne,listTwo){
    let reverseListOne = listOne.reverse();
    let reverseListTwo = listTwo.reverse();
    let str1 = "";
    let str2 = "";
    for(let i=0;i<reverseListOne.length;i++){
        str1 = str1 + reverseListOne[i].value;
    }
    for(let i=0;i<reverseListTwo.length;i++){
        str2 = str2 + reverseListTwo[i].value;
    }
    
    const sum = parseInt(str1) + parseInt(str2);
    const strSum = "" + sum;
    const reverseSum = reverseString(strSum);
    return reverseSum;
    
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function createSumLinkedList(linkedListSum){
    const newResultList = new linkedList(parseInt(linkedListSum[0]));
    for (let i = 1; i < linkedListSum.length; i++){
        newResultList.pushBack(parseInt(linkedListSum[i]));
    }
    return newResultList;
}
reverseString("hello");
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
const firstListArray = listOne.taversing();
const seccondListArray = listTwo.taversing();
const twoListSum = linkedListSum(firstListArray,seccondListArray);
createSumLinkedList(twoListSum);
