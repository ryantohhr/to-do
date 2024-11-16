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

        const lowPrioBtn = document.querySelector(".low-priority-button");
        const medPrioBtn = document.querySelector(".medium-priority-button");
        const highPrioBtn = document.querySelector(".high-priority-button");

        lowPrioBtn.addEventListener('click', () => {
            lowPrioBtn.classList.add("low-priority-button-active");
            medPrioBtn.classList.remove("medium-priority-button-active");
            highPrioBtn.classList.remove("high-priority-button-active");
        });
        medPrioBtn.addEventListener('click', () => {
            lowPrioBtn.classList.remove("low-priority-button-active");
            medPrioBtn.classList.add("medium-priority-button-active");
            highPrioBtn.classList.remove("high-priority-button-active");
        })
        highPrioBtn.addEventListener('click', () => {
            lowPrioBtn.classList.remove("low-priority-button-active");
            medPrioBtn.classList.remove("medium-priority-button-active");
            highPrioBtn.classList.add("high-priority-button-active");
        })
    }

    renderProjectModal();
    renderToDoModal();
})();



