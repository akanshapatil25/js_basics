// domHandlers.js
import { getEl } from "./dom_u.js";

const title = getEl("title");
const message = getEl("message");
const changeTextBtn = getEl("changeTextBtn");
const changeColorBtn = getEl("changeColorBtn");

export const setupTextChange = () => {
  changeTextBtn.addEventListener("click", () => {
    title.textContent = "Welcome to DOM World!";
    message.textContent = "You clicked the text change button!";
  });
};

export const setupColorChange = () => {
  changeColorBtn.addEventListener("click", () => {
    message.style.color = "blue";
  });
};
