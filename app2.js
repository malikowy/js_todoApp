let listItemsTodo = document.querySelector(".todo-tasks").getElementsByTagName("li");
let btnTaskNew = document.querySelector('.addTask');
let liTodo = document.querySelector(".todo-tasks");
let textTaskNew = document.querySelector(".todo-text");
let btnDone = document.querySelectorAll('.doneTask');

liTodo.addEventListener("click", selectItem);

function selectItem(e) {
    if (e.target.nodeName == "LI") {
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

btnTaskNew.addEventListener("click", function() {
    liTodo.innerHTML += '<li>' + textTaskNew.value + '<div class="btn"> <button type="button" class="doneTask">Done</button><button type="button" class="removeTask">X</button></div></li>';
}, false);


// btnDone.addEventListener("click", moveToDone);