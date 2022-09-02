import Completer from "../models/Complete.js";
import Task from "../models/Task.js";
import ListTodo from "../models/listTodo.js";

const listTodo = new ListTodo();

let getList = () => {
    let completeHTML = "";
    let taskHTML = "";
    listTodo.mangTodo.map((todo) => { 
        let {id, listType, content} = todo;
        if (listType == 1){
            let succ = new Completer (id, listType, content);
            completeHTML += succ.renderHTML();
        }
        else{
            let task  = new Task (id, listType, content);
            taskHTML += task.renderHTML();
        }
     });
    document.getElementById("completed").innerHTML = completeHTML;
    document.getElementById("todo").innerHTML = taskHTML;
}

let setLocalStorage = () => {
    localStorage.setItem("TODOLIST", JSON.stringify(listTodo.mangTodo));
}

let getLocalStorage = () => {
    if (localStorage.getItem("TODOLIST") != undefined) {
        listTodo.mangTodo = JSON.parse(localStorage.getItem("TODOLIST"));
        getList();
    }
    
}

getLocalStorage();

let addTodoList = () => {
    let id = Math.max(...listTodo.mangTodo.map((val) => (val.id))) + 1;
    let content = document.getElementById("newTask").value;
    let isValid = listTodo.checkEmpty(content, "btNewTask", "Công việc không được để trống");
    if(isValid){
        let todo = new Task(id, 0, content);
        listTodo.addTodo(todo);
        getList();
        setLocalStorage();
        document.getElementById("newTask").value = "";
    }   
}

document.getElementById("addItem").onclick = addTodoList;

let remove = (id) => {
    listTodo.removeTodo(id);
    getList();
    setLocalStorage();
}

window.remove = remove;

let complete = (id) => {
    listTodo.updateTodo(id);
    getList();
    setLocalStorage();
}

window.complete = complete;

let sortTodoList = () => {
    listTodo.mangTodo.sort((a, b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)); 
    getList();
}

document.getElementById("two").onclick = sortTodoList;

let reverseTodoList = () => {
    sortTodoList();
    listTodo.mangTodo.reverse(); 
    getList();
}

document.getElementById("three").onclick = reverseTodoList;


