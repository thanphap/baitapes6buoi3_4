import Todo from "./Todo.js";

export default class Task extends Todo{
    renderHTML(){
        return `<li>
                    <span>${this.content}</span>
                    <div class="buttons">
                        <button class="remove" onclick="remove(${this.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button> 
                        <button class="complete" onclick="complete(${this.id})">
                            <i class="far fa-check-circle"></i>
                        </button>
                    </div>
                </li>`;
    }
}