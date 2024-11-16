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


