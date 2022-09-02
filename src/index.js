//@ts-check

/**
 * @typedef {Array<String>} TAG_PROPS
 * @typedef {{id:number,text:String,cate:String,tags:TAG_PROPS,isDone:Boolean}} TODOITEM_PROPS
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
     * @param {String} [text] 
     * @param {String} [cate]
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
     * @param {number} [targetId] 
     * @returns {TODOITEM_PROPS|Array<TODOITEM_PROPS>|null}
     */

    read(targetId){

        if(targetId) {
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

        }else{
            const setArr = [];
            this.items.forEach(item => {
                setArr.push({
                    id:item.myId,
                    text:item.myText,
                    cate:item.myCate,
                    tags:item.myTags,
                    isDone:item.isDone
                });
            });

            return setArr;
        }
    }
}


 /**
 * Todo item
 * @constructor
 * @param {number} id - todo items's id
 * @param {String} [text] - todo item's content
 * @param {String} [cate] - todo item's category
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
 * @param {String} prop - set todo item's property
 * @param {String|Array|Boolean} [value] - set todo item's property
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


