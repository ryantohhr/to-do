export const DOMManipulator = (function() {
    function displayToDo(project) {
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

            const editBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            editBtn.setAttribute("viewBox", "0 0 24 24");
            editBtn.innerHTML = '<title>Edit</title><path d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z" />';

            const deleteBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            deleteBtn.setAttribute("viewBox", "0 0 24 24");
            deleteBtn.innerHTML = '<title>Delete</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />';

            toDoContainer.appendChild(toDoTitle);
            toDoContainer.appendChild(toDoDate);
            toDoContainer.appendChild(toDoDetails);
            toDoContainer.appendChild(editBtn);
            toDoContainer.appendChild(deleteBtn);

            const mainContainer = document.querySelector("div.container");
            mainContainer.appendChild(toDoContainer);
        }
    }

    return { displayToDo };
})();