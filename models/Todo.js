export default class Todo {
    constructor(id, listType, content) {
        this.id = id;
        this.listType = listType;
        this.content = content;
    }

    renderHTML() {
        return `Chờ phân loại công việc`;
    }
}