export class ToDo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
    }

    editToDo(newTitle, newDesc, newDueDate, newPriority) {
        this.title = newTitle;
        this.desc = newDesc;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    }

    checkToDo() {
        
    }
}