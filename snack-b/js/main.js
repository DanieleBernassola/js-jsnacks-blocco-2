'use strict';

// Inizializzazioni
const elementi = ['pasta', 'pane', 'pizza', 'ciao'];
console.log('Questi sono gli elementi:', elementi);
const elemento = prompt('Inserisci un elemento');
console.log('Hai inserito questo elemento:', elemento);
let isPresent = -1;

// Funzione che trova in che posizione è presente un elemento
function trovaIndice(elemento){
    for (let i = 0; i < elementi.length; i++){
        if (elemento === elementi[i]) {
            isPresent = i;
        }
    }
    console.log('Il tuo elemento si trova in posizione:', isPresent);
}

// Chiamata della funzione
trovaIndice(elemento);