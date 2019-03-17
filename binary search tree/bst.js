function binarySearchTree(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;
    var insertNode = function(node, newNode){
        if(newNode.key<node.key){
            if(node.left === null){
                node.left = newNode
            }else {
                insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else {
                insertNode(node.right, newNode);
            }
        }
    }
    this.insert = function(key){
        var newNode = new Node(key)
        if(root === null ){
            root = newNode;
        }else{
            insertNode(root,newNode)
        };
    }
    function inOrderTravese(node,callback){
        if(node !== null){
            inOrderTravese(node.left,callback);
            callback(node.key);
            inOrderTravese(node.right,callback);
        }
    }
    function preOrderTravese(node,callback){
        if(node !== null){
            callback(node.key);
            preOrderTravese(node.left,callback);
            preOrderTravese(node.right,callback);
        }
    }
    this.inOrderTravese = function(){
        inOrderTravese(root,printValue)
    }
    this.preOrderTravese = function(){
    preOrderTravese(root,printValue)
    }
    function printValue(key){
        console.log(key);
    }
}

var tree  = new binarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.inOrderTravese();
tree.preOrderTravese()