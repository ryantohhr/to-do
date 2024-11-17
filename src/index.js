import "./style.css";
import { ToDo } from "./todo-mod.js";
import { Project, projectList } from "./projects-mod.js";
import { DOMManipulator, renderModals } from "./dom-mod.js";

const main = (function() {
    const home = new Project("Home");
    let currentProject = home;
    projectList.push(home);

    const homeBtn = document.querySelector(".home");
    homeBtn.addEventListener('click', () => {
        currentProject = home;
        DOMManipulator.displayToDo(home);
    })

    
    // Render Project Modal
    renderModals.renderProjectModal();
    const createProjectBtn = document.querySelector(".create-project-button");
    createProjectBtn.addEventListener('click', () => {
        handleProjectInput();
    })

    function addProject(title) {
        const project = new Project(title);
        projectList.push(project);
        displayProject(project);
        currentProject = project;
        DOMManipulator.displayToDo(project);
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
        const status = handleToDoInput();
        if (!status) {
            DOMManipulator.displayToDo(currentProject);
        }
    })

    function addToDo(title, desc, dueDate, priority) {
        const toDo = new ToDo(title, desc, dueDate, priority);
        currentProject.addToDoToProject(toDo);
        if (currentProject !== home) {
            home.addToDoToProject(toDo);
        }
    }

    function handleToDoInput() {
        const toDoTitleField = document.querySelector("#todo-title");
        const title = toDoTitleField.value;

        const toDoDescField = document.querySelector("#todo-desc");
        const desc = toDoDescField.value;

        const toDoDateField = document.querySelector("#todo-date");
        const dueDate = toDoDateField.value;

        const lowPrioBtn = document.querySelector("#low-priority");
        const medPrioBtn = document.querySelector("#medium-priority");
        const highPrioBtn = document.querySelector("#high-priority");
        let priority;
        if (lowPrioBtn.checked || medPrioBtn.checked || highPrioBtn.checked) {
            const toDoPriorityField = document.querySelector("input[type='radio']:checked");
            priority = toDoPriorityField.value;
        }

        const addToDoModal = document.querySelector(".add-todo-modal");
        if (title && dueDate && priority) {
            addToDo(title, desc, dueDate, priority);
            addToDoModal.style.display = "none";
            renderModals.resetToDo();
            return 0;
        }

        return 1;
    }


    function displayProject(project) {
        const projectDiv = document.createElement("div");
        projectDiv.textContent = `${project.title}`;
        projectDiv.setAttribute("id", `${project.id}`);
        projectDiv.addEventListener('click', (event) => {
            handleProjectTab(event);
        })

        const projectContainer = document.querySelector(".projects");
        projectContainer.appendChild(projectDiv);
    }

    function handleProjectTab(event) {
        const projectID = event.target.id;
        const targetProject = projectList.find(function(item) {
            return item.id === projectID;
        })
        DOMManipulator.displayToDo(targetProject);
        currentProject = targetProject;
    }

    return {  };
})();

