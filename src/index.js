import "./style.css";
import { ToDo } from "./todo-mod.js";
import { Project } from "./projects-mod.js";
import { DOMManipulator } from "./dom-mod.js";

const todo1 = new ToDo("To-Do List", "HTML, CSS, Javascript", "16 Nov", "medium");
const home = new Project("Home");
home.addToDo(todo1);

DOMManipulator.displayProject(home);
DOMManipulator.displayToDo(home);