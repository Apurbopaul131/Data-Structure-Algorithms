//insert new node at the last of the linked list
class list{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.tail = this.head;
    }
    pushLastNode(nodeData){
        let newNode = {
            data:nodeData,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode;

    }
}
const listONe = new list(100);
listONe.pushLastNode(500);
listONe.pushLastNode(400);
console.log(listONe);


