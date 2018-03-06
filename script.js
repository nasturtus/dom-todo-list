var tasks = ["buy milk", "eat dinner", "nail javascript"];

function initialiseToDoList() {
  // clear existing display of ToDos
  document.getElementById("todo-list").textContent = "";

  // render updated ToDo List
  tasks.forEach(element => {
    var li = document.createElement("li");
    li.textContent = element;
    li.className = 'pending'

    createAndAddEventListener(li);
    var ul = document.getElementById("todo-list");
    ul.appendChild(li);
  });
}

initialiseToDoList();

// handle enter or 'Add To Do' button event
var btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function(event) {
  event.preventDefault();
  var formInput = document.getElementById("toDoItem");
  var toDoString = formInput.value;
  formInput.value = "";
  tasks.push(toDoString);
  document.getElementsByTagName("form")[0].reset();

  var li = document.createElement("li");
  li.textContent = toDoString;
  li.className = 'pending'

  createAndAddEventListener(li);

  var ul = document.getElementById("todo-list");
  ul.appendChild(li);
});

function createAndAddEventListener(element) {
  element.addEventListener("click", function() {
    if (element.className === "pending") {
      element.className = "done";
    } else {
      element.className = "pending";
    }
  });
}
