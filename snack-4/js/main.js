'use strict';
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const array1 = [1, 20, 73, 54, 68];
const array2 = [2, 15, 39, 47, 86, 103, 62];

console.log(array1);
console.log(array2);

if (array1.length < array2.length){
    while(array1.length < array2.length){
        array1.push(Math.ceil(Math.random() * 100));
        console.log('Adesso array1 ha lo stesso numero di elementi di array2');
    }
} else if (array2.length < array1.length){
    while(array2.length < array1.length) {
        array2.push(Math.ceil(Math.random() * 100));
        console.log('Adesso array2 ha lo stesso numero di elementi di array1');
    }
} else {
    console.log('gli array hanno già lo stesso numero di elementi');
}

console.log(array1);
console.log(array2);