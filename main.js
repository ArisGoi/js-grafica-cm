/** RICHIESTA
 * Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
 * Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
 * Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.
*/

// Genera un numero definito di figli all'interno di un'elemento
function childGenerator(nameContainElement, typeOfChild, nameChildClass, numberOfChild){
    for (i = 0; i < numberOfChild; i++) {
        document.getElementById(nameContainElement).innerHTML += `<${typeOfChild} class="${nameChildClass}">${i + 1}</${typeOfChild}>`
    }
}

// richiamo la funzione childGenerator inserendo i dati e richiedendo all'utente il numero di quadrati da generare
childGenerator("container", "div", "square", prompt('Inserisci un numero di quadrati'));

// al click di un quadrato questo si colora di rosso e crea un alert che ti informa del suo numero
document.getElementById('container').addEventListener('click',
    function(event){

        let nCella = event.target.innerHTML;

        alert('hai fatto click sulla cella numero: ' + nCella);

        event.target.classList.add('selected');
    }
);