// podstawa działania
let textTaskNew = document.querySelector(".todo-text");
let btnTaskNew = document.querySelector('.addTask');
// listy
let liTodo = document.querySelector(".todo-tasks");
let listItemsTodo = document.querySelector(".todo-tasks").getElementsByTagName("li");
let liDone = document.querySelector(".done-tasks")
let listItemsDone = document.querySelector(".done-tasks").getElementsByTagName("li");
// funkcje zadań
let btnDone = document.querySelectorAll('.doneTask');
let btnRemove = document.querySelectorAll('.removeTask');
let btnRedo = document.querySelectorAll('.redoTask');

// Dodanie elementu do listy
btnTaskNew.addEventListener("click", function() {
    liTodo.innerHTML += '<li>' + textTaskNew.value + '<div class="btn"> <button type="button" class="doneTask">Done</button><button type="button" class="removeTask">X</button></div></li>';
}, false);

// oznaczenie elementu jako aktywny po kliknięciu
liTodo.addEventListener("click", selectItem);

function selectItem(e) {
    if (e.target.nodeName == "LI") {
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}


// btnDone.addEventListener("click", doneTask);
// btnRemove.addEventListener("click", removeTask);
// btnRedo.addEventListener("click", redoTask);