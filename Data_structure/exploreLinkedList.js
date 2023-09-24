class Node {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
    }
      
    // method to find the second last
    // node of the linked list
    function findSecondLastNode( ptr)
    {
    var temp = head ;
      
    // If the list is empty or
    // contains less than 2 nodes
    if (temp == null || temp.next == null)
    return -1 ;
      
    // Traverse the linked list
    while (temp != null)
    {
      
    // Check if the current node is the
    // second last node or not
    if (temp.next.next == null)
    return temp.data;
      
    // If not then move to the next node
    temp = temp.next;
    }
    }
      
    // Function to push node at head
    function push( data)
    {
    var new_node = new Node(data) ;
    new_node.next = head ;
    head = new_node ;
    return head ;
    }
      
    // Driver Code
      
    var head = null ;
      
    /* Use push() function to construct 
    the below list 8 -> 23 -> 11 -> 29 -> 12 */
      
    head = push(12);
    head = push(29);
    head = push(11);
    head = push(23);
    head = push(8);
    document.write(findSecondLastNode(head));