// Zadanie pobierania tekstu i dodawania do listy TODO
let btnTaskNew = document.querySelector('.addTask');
btnTaskNew.addEventListener("click", function() {
    let liNewTodo = document.createElement("li");
    let liTodo = document.querySelector(".todo-tasks");
    let textTaskNew = document.querySelector(".todo-text");
    liNewTodo.innerHTML = textTaskNew.value + '<div class="btn"> <button type="button" class="doneTask">Done</button><button type="button" class="removeTask">X</button></div>';
    liTodo.appendChild(liNewTodo);
}, false);