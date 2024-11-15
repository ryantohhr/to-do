export class Project {
    constructor(title) {
        this.title = title;
        this.toDos = [];
    }

    addToDo(toDo) {
        this.toDos.push(toDo)
    }
}