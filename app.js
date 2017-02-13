var addBtn = document.querySelector('.klasaBtn');
addBtn.addEventListener("click", function() {
    var liCell = document.createElement("li");
    var listWhole = document.querySelector("klasaListy");
    var inputText = document.querySelector("klasaInputa");
    liCell.innerHTML = inputText.value;
    listWhole.appendChild(liCell);
}, false);

// działanie: po kliknięciu addBtn, tworzy LI, otwiera listę, otwiera inputa, pobiera treść inputa, dodaje utworzony element LI na końcu listy z treścią z inputa