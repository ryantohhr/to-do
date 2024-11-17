export class ToDo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
        this.id;
    }

    editToDo(newTitle, newDesc, newDueDate, newPriority) {
        this.title = newTitle;
        this.desc = newDesc;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    }

    checkToDo() {
        switch(this.checked) {
            case true:
                this.checked = false;
                break;
            case false:
                this.checked = true;
                break;
        }
    }
}