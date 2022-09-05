//@ts-check

/**
 * @author Brynna We <brynna.we@gmail.com>
 */



/**
 * @typedef {Array<String>} TAG_PROPS
 */

/**
 * Todo Item Props setting
 * @typedef {Object} TODOITEM_PROPS
 * @property {Number} id
 * @property {String} [text]
 * @property {String} [cate]
 * @property {TAG_PROPS} [tags]
 * @property {Boolean} [isDone]
 * 
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
     * create Todo Item.
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
     * get specific item
     * 
     * @param {Number} [targetId] 
     * @returns {TODOITEM_PROPS|null}
     */

    readItem (targetId){      
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


    /**
     * get all todo Items
     * 
     * @returns {Array<TODOITEM_PROPS>}
     */

    readItemAll (){ 
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
    

    /**
     * update specific item
     * @param {String} id 
     * @param {String} prop 
     * @param {String|Array} value 
     */
    updateItem (id, prop, value){

        /**
         * @typedef {TODOITEM_PROPS} 
         * @param {TODOITEM_PROPS} item
         * */
        const getItem = this.items.filter(item => item.id === id);
        //이경우에 js파일에서는 getItem의 타입을 어떻게 정의할 수 있는지?
        //const getItem:TODOITEM_PROPS 처럼...

        getItem[0].update(prop, value);
    }


    /**
     * delete selected item
     * @param {String} id 
     */
    deleteItem (id){

    }

    /**
     * delete all items
     */
    deleteItemAll (){
        
    }

    /**
     * delete selected tag from specific Item.
     * @param {String} id 
     * @param {String} value 
     */
    deleteTag(id,value){

    }

    /**
     * delete all tag from specific Item.
     * @param {String} id 
     */

    deleteTagAll(id){

    }


}


/**
 * Todo item
 * @constructor
 * @param {Number} id - todo items's id
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


