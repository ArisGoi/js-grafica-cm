// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// Genera un numero definito di figli all'interno di un'elemento
function childGenerator(nameContainElement, typeOfChild, nameChildClass, numberOfChild){
    for (i = 0; i < numberOfChild; i++) {
        document.getElementById(nameContainElement).innerHTML += `<${typeOfChild} class="${nameChildClass}">${i + 1}</${typeOfChild}>`
    }
}

childGenerator("container", "div", "square", 50);

// document.getElementById(nameElement).innerHTML = `<div class="${nameSquareClass}">${i}</div>`