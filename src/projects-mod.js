export const projectList = [];

export class Project {
    constructor(title) {
        this.title = title;
        this.id = `${projectList.length}`;
        this.toDos = [];
    }

    addToDoToProject(toDo) {
        this.toDos.push(toDo);
        toDo.id = this.toDos.indexOf(toDo);
    }
}