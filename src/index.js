import "./style.css";
import { ToDo } from "./todo-mod.js";
import { Project } from "./projects-mod.js";
import { DOMManipulator } from "./dom-mod.js";

const main = (function() {
    function addProject(title) {
        const project = new Project(title);
        DOMManipulator.displayProject(project);
    }
    
    return { addProject };
})();

const renderModals = (function() {
    function renderProjectModal() {
        const addProjectModal = document.querySelector(".add-project-modal");
        const newProjectBtn = document.querySelector(".new-project");

        newProjectBtn.addEventListener('click', () => {
            addProjectModal.style.display = "grid";
        })

        const projectModalClose = document.querySelector(".project-modal-close");
        projectModalClose.addEventListener('click', () => {
            addProjectModal.style.display = "none";
        })
    }

    function renderToDoModal() {
        const addToDoModal = document.querySelector(".add-todo-modal");
        const plusToDoBtn = document.querySelector(".add-button");

        plusToDoBtn.addEventListener('click', () => {
            addToDoModal.style.display = "grid";
        })

        const toDoModalClose = document.querySelector(".todo-modal-close");
        toDoModalClose.addEventListener('click', () => {
            addToDoModal.style.display = "none";
        })
    }

    renderProjectModal();
    renderToDoModal();
})();



