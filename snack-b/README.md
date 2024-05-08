<!-- scrivere una funzione trovaIndice() -->

- creo una funzione trovaIndice()

<!-- dati un array e un elemento in input -->

- creo un array elementi
- creo una variabile elemento che prenderà il valore di un prompt
- creo una variabile isPresent = -1, che andrò a modificare con il valore dell'indice

<!-- restituisca la posizione in cui si trova l'elemento all'interno dell'array -->

function trovaIndice(elemento){
    for (let i = 0; i < elementi.length; i++){
        SE (elemento === elementi[i]) {
            isPresent = i;
        }
    }
<!-- se l'elemento non è presente nell'array, allora la funzione deve restituire -1 -->
    console.log('Il tuo elemento si trova in posizione:', isPresent);
}