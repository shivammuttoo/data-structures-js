class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.last = this.head;
    }
    // to insert node from last
    push(value){
        if(this.head === null){
            this.head = new Node(value);
            this.last = this.head;
        }else{
            var node = new Node(value);
            this.last.next = node;
            this.last = node;
        }
        return this;
    }
    // to delete node form last
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.last = newTail;
        this.last.next = null;
        return current;
    }
    // to delete node from head
    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        return current;
    }
    //to unshift 
    unShift(value){
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
    get(index){
        var counter = 0;
        var current = this.head;        
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current;
    }
    insert(value, index){
        var counter=0;
        var current = this.head;
        var newnode = current;
        while(counter != index){
             newnode = current;
             current = current.next;
             counter++;
        }
        var node = new Node(value);
        newnode.next = node;
        node.next = current;
        return this; 

    }
    remove(index){
        var current = this.get(index-1);
        current.next = current.next.next;
        return this;
    }

}
var linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
