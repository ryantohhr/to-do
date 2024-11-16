import "./style.css";
import { ToDo } from "./todo-mod.js";
import { Project } from "./projects-mod.js";
import { DOMManipulator, renderModals } from "./dom-mod.js";

const main = (function() {
    const home = new Project("Home");
    let currentProject = home;

    
    // Render Project Modal
    renderModals.renderProjectModal();
    const createProjectBtn = document.querySelector(".create-project-button");
    createProjectBtn.addEventListener('click', () => {
        handleProjectInput();
    })

    function addProject(title) {
        const project = new Project(title);
        DOMManipulator.displayProject(project);
    }

    function handleProjectInput() {
        const projectTitleField = document.querySelector("#project-title");
        const title = projectTitleField.value;
        const addProjectModal = document.querySelector(".add-project-modal");
        if (title) {
            addProject(title);
            addProjectModal.style.display = "none";
            projectTitleField.value = "";
        }
    }


    // Render To-Do Modal
    renderModals.renderToDoModal();
    const createToDoBtn = document.querySelector(".create-todo-button");
    createToDoBtn.addEventListener('click', () => {
        handleToDoInput();
        DOMManipulator.displayToDo(currentProject);
    })

    function addToDo(title, desc, dueDate, priority) {
        const toDo = new ToDo(title, desc, dueDate, priority);
        currentProject.addToDoToProject(toDo);
    }

    function handleToDoInput() {
        const toDoTitleField = document.querySelector("#todo-title");
        const title = toDoTitleField.value;

        const toDoDescField = document.querySelector("#todo-desc");
        const desc = toDoDescField.value;

        const toDoDateField = document.querySelector("#todo-date");
        const dueDate = toDoDateField.value;

        const toDoPriorityField = document.querySelector("input[type='radio']:checked");
        const priority = toDoPriorityField.value;

        const addToDoModal = document.querySelector(".add-todo-modal");
        if (title) {
            addToDo(title, desc, dueDate, priority);
            addToDoModal.style.display = "none";
            toDoTitleField.value = "";
            toDoDescField.value = "";
            toDoDateField.value = "";
            toDoPriorityField.checked = false;
        }
    }

    
    return {  };
})();