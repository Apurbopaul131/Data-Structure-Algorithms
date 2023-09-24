//insert new node at the last of the linked list
class list{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.tail = this.head;
        this.size = 1;
    }
    pushLastNode(nodeData){
        let newNode = {
            data:nodeData,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size =+ 1;
        return this.size;
    }
}
const listONe = new list(100);
console.log(listONe.pushLastNode(500));
console.log(listONe.pushLastNode(400));



