/*  A dictionary is used to store [key,value] pairs, where the key is used to find a particular element. 
    A dictionary is also known as map.
*/

// creating dictionary 
class Dictionary {
    items ;
    constructor(){};
    
    // createing has and set methods
    has(key) {
        return key in items;
    }
    set(key, value){
        this.items[key] = value;
    }
    // delete funcion
    delete(key){
        if(this.has(key)){
            delete this.items[key];
            return true
        }
        return false;
    }
    // get function
    get(key){
        this.items[key] ? this.items[key]: undefined;
    }
    values(){
        let value = [];
        for(key in this.items){
            if(this.has(key)){
                value.push(this.items[key]);
            }
        }
        return value;
    }
}
var dictionary = new Dictionary()
dictionary.set('shivam','shivammuttoo@gmail.com')
export default Dictionary