<!-- scrivere una funzione trovaIndice() -->

- creo una funzione trovaIndice()

<!-- dati un array e un elemento in input -->

- creo un array elementi
- creo una variabile elemento che prenderà i valori di un prompt

<!-- restituisca la posizione in cui si trova l'elemento all'interno dell'array -->

function trovaIndice(){
    for (let i = 0; i < elementi.length; i++){
        SE (elemento === elementi[i]){
            console.log('Il tuo elemento si trova in posizione:', i)
        } 
        return -1;
<!-- se l'elemento non è presente nell'array, allora la funzione deve restituire -1 -->
    }
}

