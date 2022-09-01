export default class ListTodo{
    constructor(){
        this.mangTodo = [];
    }
    
    addTodo(todo){
        this.mangTodo = [...this.mangTodo, todo];
    }

    getPoint(key) {
        let point = -1;
        this.mangTodo.map((todo, index) => { 
            if (todo.id === key) {
                point = index;
            }
        });
        return point;
    }
    
    removeTodo(key){
        let point = this.getPoint(key);
        if(point >-1){
            this.mangTodo.splice(point, 1);
        }
    }

    updateTodo(key){
        let point = this.getPoint(key);
        if(point > -1){
            this.mangTodo[point].listType = 1;
        }
    }
    
    checkEmpty(inputVal, spanId, message) {
        if (inputVal.trim() != "") {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }
}