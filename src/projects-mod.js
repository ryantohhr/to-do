export class Project {
    constructor(title) {
        this.title = title;
        this.toDos = [];
    }

    addToDoToProject(toDo) {
        this.toDos.push(toDo);
    }
}