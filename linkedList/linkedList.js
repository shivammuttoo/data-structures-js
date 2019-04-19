class LinkedList{
    constructor(){
        this.list = {};
        this.head = null;
        this.current = null
        this.length = 0;
    }    
    append(element){
        let newNode = new NewNode(element);
        if(this.head=== null){
            this.head = newNode;
        }else{
            this.current = this.head;
            while(this.current.next){
                this.current = this.current.next;
            }
            this.current.next = newNode;
            this.length++;
        }
    }
    printList(){
        while(this.current && this.current.element){
            console.log(this.current.element);
            this.current = this.current.next;
        }
    }
}
class NewNode{
    constructor(element){
        this.element = element;
        this.next = null;
    }    
}
var linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.printList();