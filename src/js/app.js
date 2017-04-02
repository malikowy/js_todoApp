// przechowanie w pamięci jako tablica
let data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
};

renderTodoList();

// pobranie treści
document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById('item').value;
    if (value) {
        addItem(value);
    }
});

document.getElementById('item').addEventListener('keydown', function(e) {
    let value = this.value;
    if (e.code === 'Enter' && value) {
        addItem(value);
    }
});

function addItem(value) {
    addItemToDOM(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
    dataObjectUpdated();
}

function renderTodoList() {
    if (!data.todo.length && !data.completed.length) return;

    for (let i = 0; i < data.todo.length; i++) {
        let value = data.todo[i];
        addItemToDOM(value);
    }

    for (let j = 0; j < data.completed.length; j++) {
        let value = data.completed[j];
        addItemToDOM(value,true);
    }
}

// przechowanie w pamięci
function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

// usuniecie elementu
function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
    }
    dataObjectUpdated();

    parent.removeChild(item);
}
// wykonanie elementu lub cofniecie wykonania
function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }
    dataObjectUpdated();

    // metoda if tylko w zmiennej
    let target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');
    parent.removeChild(item);
    target.appendChild(item);
}

// dodanie treści jako element
function addItemToDOM(text, completed) {
    let list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div');
    buttons.classList.add('btn');

    let done = document.createElement('button');
    done.classList.add('doneTask');
    done.addEventListener("click", completeItem);

    let remove = document.createElement('button');
    remove.classList.add('removeTask');
    remove.addEventListener("click", removeItem);

    buttons.appendChild(done);
    buttons.appendChild(remove);
    item.appendChild(buttons);
    list.appendChild(item);
}