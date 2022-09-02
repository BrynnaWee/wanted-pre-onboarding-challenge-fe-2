//@ts-check

/**
 * @typedef {[string]} TAG_PROPS
 * @typedef {{id:number,text:string,cate:string,tags:TAG_PROPS,isDone:Boolean}} TODOITEM_PROPS
 */


/**
 * Todo List
 * @constructor
 * 
 */
class TodoList {
    constructor() {
        this.currentId = 0;
        this.items = [];
    }

    /**
     * @param {string} [text] 
     * @param {string} [cate]
     * @param {Array} [tags]
     * 
     */
    create(text,cate,tags) {
        const newItem = new TodoItem(this.currentId,text,cate,tags);
        this.items.push(newItem);
        this.currentId++;
    }

    /**
     * get todo item's with id
     * 
     * @param {number} targetId 
     * @returns {TODOITEM_PROPS|null}
     */

    read(targetId){
        const getItem = this.items.filter(item => item.id === targetId);

        if(getItem){
            return {
                // @ts-ignore
                id:getItem.myId,
                // @ts-ignore
                text:getItem.myText,
                // @ts-ignore
                cate:getItem.myCate,
                // @ts-ignore
                tags:getItem.myTags,
                // @ts-ignore
                isDone:getItem.isDone
     
            }
        }else {
            return null 
        }
    }
}


 /**
 * Todo item
 * @constructor
 * @param {number} id - todo items's id
 * @param {string} [text] - todo item's content
 * @param {string} [cate] - todo item's category
 * @param {Array} [tags] - todo item's tags array
 */


 function TodoItem (id, text, cate, tags){
    this.myId = id;
    this.myText=text;
    this.myCate=cate;
    this.myTags = tags;
    this.isDone = false;
}


/**
 * Update Todo Item
 * @param {string} prop - set todo item's property
 * @param {string|Array|Boolean} [value] - set todo item's property
 * 
 */

 TodoItem.prototype.update = function(prop,value){

    let target = prop;
    if(!this[target]||target==='id') return;
    
    if(Array.isArray(value)){
        this[target].concat(value);
    }else{
        this[target] = value;   
    }
}


