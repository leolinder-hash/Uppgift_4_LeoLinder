//Declaring variables

const newTodoInput = document.querySelector("#newTodoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const myListItems = document.querySelector("#myListItems");
const warningText = document.querySelector("#warningText");
const completedTasks = document.querySelector("#completedTasks");
let items = [];

addTodoBtn.addEventListener("click", addNewTodo);


function addNewTodo() {

  const inputText = newTodoInput.value.trim();

  //if input is empty show warning-text
  if (inputText === "") {
    warningText.textContent = "You have to write something!";
    return;
  }

  warningText.textContent = "";

  const todo = { //To create objects for the array
    text: inputText,
    completed: false
  };

  items.push(todo); //Adding objects to the array


  let newLi = document.createElement("li");
  newLi.textContent = todo.text;
  myListItems.appendChild(newLi);
  //Sending arguments to function done-tasks
  newLi.addEventListener("click", () => doneTasks(todo, newLi));

    newTodoInput.value = ""; //Clearing input-field
}

//If todo isn't completed -> set to true + add class ".done"
function doneTasks(todo, newLi) {
  if (!todo.completed) {
    todo.completed = true;
    newLi.classList.add("done");
  }

  else{
    todo.completed = false;
    newLi.classList.remove("done");
  }

  let completedNum = 0;

  //if index i in the list is clicked, add 1 to completedNum
  for (let i = 0; i < items.length; i++) {
    if (items[i].completed === true) {
      completedNum++;
    }
  }

  completedTasks.textContent = `Completed todos: ${completedNum}`;
}

