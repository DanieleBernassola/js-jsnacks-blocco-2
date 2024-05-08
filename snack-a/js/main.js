'use strict';

// Inizializzazioni
const elementi = [];
let elemento;
let i = 0;

// Funzione che conta gli elementi presenti nell'array
function contaElementi(){
    while (elemento !== 'stop'){
        elemento = prompt('Inserisci un elemento');
        elementi.push(elemento);
        i++;
        if (elemento == 'stop'){
            i--;
            elementi.pop(elemento);
        }
    }
    return elementi;
}

// Chiamata della funzione
contaElementi();
// Output
console.log('Questi sono gli elementi inseriti:', elementi);
console.log('Il numero di elementi presenti è:', i);