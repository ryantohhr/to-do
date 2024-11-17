import { projectList } from "./projects-mod";

export const DOMManipulator = (function() {
    function displayToDo(project) {
        const mainContainer = document.querySelector("div.container");
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
        if (project.toDos) {
            for (let toDo of project.toDos) {
                const toDoContainer = document.createElement("div");
                toDoContainer.classList.add("to-do");
                toDoContainer.classList.add(`${toDo.priority}`);

                const toDoTitle = document.createElement("div");
                toDoTitle.classList.add("title");
                toDoTitle.textContent = `${toDo.title}`;

                const toDoDate = document.createElement("div");
                toDoDate.classList.add("date");
                toDoDate.textContent = `${toDo.dueDate}`;

                const toDoDetails = document.createElement("div");
                toDoDetails.classList.add("details");
                toDoDetails.textContent = "DETAILS";
                toDoDetails.setAttribute("data-id", `${project.id},${toDo.id}`);
                toDoDetails.addEventListener('click', (event) => {
                    handleDetailsDisplay(event);
                })

                const editBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                editBtn.setAttribute("viewBox", "0 0 24 24");
                editBtn.innerHTML = '<title>Edit</title><path d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z" />';

                const deleteBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                deleteBtn.setAttribute("viewBox", "0 0 24 24");
                deleteBtn.innerHTML = '<title>Delete</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />';
                deleteBtn.setAttribute("data-id", `${project.id},${toDo.id}`);
                deleteBtn.addEventListener('click', (event) => {
                    handleDeleteBtn(event);
                })

                toDoContainer.appendChild(toDoTitle);
                toDoContainer.appendChild(toDoDate);
                toDoContainer.appendChild(toDoDetails);
                toDoContainer.appendChild(editBtn);
                toDoContainer.appendChild(deleteBtn);

                
                mainContainer.appendChild(toDoContainer);
            }
        }
    }

    function handleDeleteBtn(event) {
        const toDoData = event.target.getAttribute("data-id");
        const idArray = toDoData.split(",");
        const projectID = Number(idArray[0]);
        const toDoID = Number(idArray[1]);
        const currentProject = projectList[projectID];
        currentProject.toDos.splice(toDoID, 1)
        displayToDo(currentProject);
    }

    function handleDetailsDisplay(event) {
        const idArray = event.target.getAttribute("data-id").split(",");
        const projectID = Number(idArray[0]);
        const toDoID = Number(idArray[1]);
        const currentProject = projectList[projectID];
        const detailsModal = document.querySelector(".details-modal");
        detailsModal.style.display = "grid";
        const detailsTitle = document.createElement("div")
        const detailsDesc = document.createElement("div")
        const detailsDate = document.createElement("div")
        const detailsPriority = document.createElement("div")

        const closeBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        closeBtn.setAttribute("viewBox", "0 0 24 24");
        closeBtn.innerHTML = '<title>Delete</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />';
        closeBtn.addEventListener('click', () => {
            detailsModal.style.display = "none";
            while (detailsModal.firstChild) {
                detailsModal.removeChild(detailsModal.firstChild);
            }
        })

        detailsModal.appendChild(closeBtn);

        detailsTitle.innerHTML = `Title: ${currentProject.toDos[toDoID].title}`;
        detailsModal.appendChild(detailsTitle);
        detailsDate.textContent = `Due date: ${currentProject.toDos[toDoID].dueDate}`;
        detailsModal.appendChild(detailsDate);
        detailsPriority.textContent = `Priority: ${currentProject.toDos[toDoID].priority}`;
        detailsModal.appendChild(detailsPriority);

        if (currentProject.toDos[toDoID].desc) {
            detailsDesc.innerHTML = `Description:<br> ${currentProject.toDos[toDoID].desc}`;
            detailsModal.insertBefore(detailsDesc, detailsDate);
        }
    }

    return { displayToDo };
})();

export const renderModals = (function() {
    function renderProjectModal() {
        const projectTitleField = document.querySelector("#project-title");
        const addProjectModal = document.querySelector(".add-project-modal");
        const newProjectBtn = document.querySelector(".new-project");

        newProjectBtn.addEventListener('click', () => {
            addProjectModal.style.display = "grid";
        })

        const projectModalClose = document.querySelector(".project-modal-close");
        projectModalClose.addEventListener('click', () => {
            addProjectModal.style.display = "none";
            projectTitleField.value = "";
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
            resetToDo();
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

    function resetToDo() {
        const toDoTitleField = document.querySelector("#todo-title");
        const toDoDescField = document.querySelector("#todo-desc");
        const toDoDateField = document.querySelector("#todo-date");
        const toDoPriorityField = document.querySelector("input[type='radio']:checked");
        const lowPrioBtn = document.querySelector(".low-priority-button");
        const medPrioBtn = document.querySelector(".medium-priority-button");
        const highPrioBtn = document.querySelector(".high-priority-button");

        toDoTitleField.value = "";
        toDoDescField.value = "";
        toDoDateField.value = "";
        if (toDoPriorityField) {
            toDoPriorityField.checked = false;
        }
        lowPrioBtn.classList.remove("low-priority-button-active");
        medPrioBtn.classList.remove("medium-priority-button-active");
        highPrioBtn.classList.remove("high-priority-button-active");
    }

    return { renderProjectModal, renderToDoModal, resetToDo };
})();