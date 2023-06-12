function Items(completion, task, timeFrame){
    this.completion = completion
    this.task = task
    this.timeFrame = timeFrame
}
function ToDoList(){
this.items = {};
this.currentId = 0;
}
ToDoList.prototype.addItem = function (item){
    item.id = this.assignId();
    this.items[item.id] = item;
};
ToDoList.prototype.assignId= function(){
    this.currentId +=1
    return this.currentId;
};
ToDoList.prototype.deleteItem = function (id) {
    if(this.items[id] === undefined){
        return false;
    }
    delete this.items[id];
    return true;
}

