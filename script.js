var tasks = ["buy milk", "eat dinner", "nail javascript"];

function createAndAppendToDoList() {
  // clear existing display of ToDos

  document.getElementById("todo-list").textContent = "";

  // render updated ToDo List
  
  tasks.forEach(element => {
    var li = document.createElement("li");
    li.textContent = element;
    li.className = "pending";

    li.addEventListener("click", function() {
      if (li.className === "pending") {
        li.className = "done";
      } else {
        li.className = "pending";
      }
    });

    var ul = document.getElementById("todo-list");
    ul.appendChild(li);
  });
}

createAndAppendToDoList();

// handle enter or 'add to do' button event

var btn = document.getElementsByTagName("button")[0];
console.log(btn);

btn.addEventListener("click", function(event) {
  event.preventDefault();
  var formInput = document.getElementById("toDoItem");
  var toDoString = formInput.value;
  formInput.value = "";
  tasks.push(toDoString);
  createAndAppendToDoList();
});
