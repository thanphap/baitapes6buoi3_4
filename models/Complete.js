import Todo from "./Todo.js";

export default class Completer extends Todo {
    renderHTML(){
        return `<li>
                    <span>${this.content}</span>
                    <div class="buttons">
                        <button class="remove" onclick="remove(${this.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button> 
                        <button class="complete">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>`;
    }
}