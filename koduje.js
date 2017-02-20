var addBtn = document.querySelector('.klasaBtn');
addBtn.addEventListener("click", function() {
    var liCell = document.createElement("li");
    var listWhole = document.querySelector("klasaListy");
    var inputText = document.querySelector("klasaInputa");
    liCell.innerHTML = inputText.value;
    listWhole.appendChild(liCell);
}, false);

// działanie: po kliknięciu addBtn, tworzy LI, otwiera listę, otwiera inputa, pobiera treść inputa, dodaje utworzony element LI na końcu listy z treścią z inputa

//  zad1
var list = document.createElement("ul");
var wrapper = document.getElementById('wrapper');
wrapper.appendChild(list);
var listElement = document.createElement('li');
list.appendChild(listElement);
listElement.innerHTML = "Paryż";

var addBtn = document.createElement('button');
addBtn.innerHTML = "dodaj nowy element";
wrapper.appendChild(addBtn);

addBtn.addEventListener("click", function() {
    var myNewListElement = document.createElement('li');
    list.appendChild(myNewListElement);
    myNewListElement.innerHTML = "Paryż";
}, false);

// zad2
var addBtn = document.querySelector('.button');
var textarea = document.getElementById('comment-content');
var list = document.querySelector('.comment-list');

addBtn.addEventListener("click", function() {
    var li = document.createElement('li');
    list.appendChild(li);
    li.classList.add("comment");
    li.innerHTML = '<div>' + textarea.value + '</div>'; // umieści wartość textarea w divie
}, false);


// element listy z przyciskami wbudowanymi
li.innerHTML = textarea.value + '<a class="doneTask">Done</a><a class="removeTask">X</a>'