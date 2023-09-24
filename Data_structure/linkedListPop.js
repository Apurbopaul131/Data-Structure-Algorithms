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
    taversing(updateNode,updatedValue){
        let counter = 0;
        let currentNode = this.head;
        while(counter < this.size){
            if(counter+1 === updateNode){
                currentNode.value = updatedValue;
            }
            currentNode = currentNode.next;
            counter++;
        }
    }
    removeSpecificNode(node){
        let count = 1;
        let leadNode = this.head;
        if(node === 1){
            this.head.next = leadNode.next;
        }

        else{
            while(count < node-1){
                leadNode = leadNode.next;
                count++;
            }
            let nextNode = leadNode.next.next;
            leadNode.next = nextNode;
        }
        
    }
    addAfterSpecificNode(nodeIndex,nodeValue){
        let newInsertNode = this.createNewNode(nodeValue);
        let countHolder = 1;
        let leadNode = this.head;
        while(countHolder < nodeIndex){
            leadNode = leadNode.next;
            countHolder++;
        }
        let nextNode = leadNode.next;
        leadNode.next = newInsertNode;
        newInsertNode.next = nextNode;
    }
 
}
const firstList = new linkedList(500);
firstList.pushBack(300);
firstList.pushBack(2000);
firstList.pushBack(3000);
//update specific node value using taversing function
// firstList.taversing(3,5000);
//remove specific node
// firstList.removeSpecificNode(4);
firstList.addAfterSpecificNode(2,700);
console.log(firstList);
