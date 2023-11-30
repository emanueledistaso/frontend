// Carrellata di basi del JS

/*
 var non lo usrai quasi mai per dichiarare variabili
Js è un linguaggio debolmente tipizzato (le variabili prendono il tipo dal valore)
Inoltre è dinamicamnete tipizzato, ovvero cambiando i valori delle variabili cambia il itpo della variabile

const mi da un valore non variabile. il valore di const può cambiare, ma non posso fare una seconda assegnazione

TIPI PRIMITIVI:
string
number
null -> Variabile con valore nullo
undefined -> Variabile vuota
Symbol (ottengo un symbol se dichiaro let sym = Symbol(hello)) ad esempio
boolean


TIPI OGGETTO:
object
array
function
*/


//OPERATORI
 // Tutti quelli classici che vabbè già conosci

 //OPERATORI SU STRINGHE

 const str1 = "ciao" + " " + "mondo" + 1;

 //il + applicato alle stringhe me le concatena
 // se metto un numero questi verrà convertito in stringa


 //SWITCH
//  switch (condizione){
//     case 1:
//         break;
//     case 2:
//     break;
//     *
//     *
//     *
//     // se due casi fanno la stessa cosa posso scrivere
//      case 1:
//      case 2:
//      istruzioni
//      break;
//  }

// const arr = [12, 34, "banana", false];

//Qualche metodo degli array

/*  .toString() mi converte l'array in una stringa
*   .shift rimuove elemento all'inizio dell'array
*   .unshift aggiunge elemento all'inizio dell'array
*   .push agginge elemento alla fine di un array
*   .pop rimuove elemento alla fine di un array
*   .splice(indice iniziale, numero elementi da rimuovere, 
            elementi da inserire a partire dall'indice iniziale
            separati da virgola)
*   .reverse() mi ribalta l'array
*   .slice(n,m) parte dall'indice n e arriva a (m-1), 
        prende gli elementi selezionati e li mette in un nuovo array (non modifica l'array originale)
        se voglio levare tutto da n in poi ometto m
        usando numeri negativi (e.g -3)  per n 
        indico di voler partire dal terzultimo elemento
*   .concat(array1,...,arrayN) concatena l'array che sto considerando con gli array argomento, in ordine  
*   .includes(valore) mi torna un booleano che mi dice se il valore è nell'array o meno
*   .indexOf(valore) prende l'indice della prima volta che il valore appare
*   .lastIndexOf(valore) torna l'indice dell'ultima volta che il valore appare
*   
*
*/

/*
//se ho un array, diciamo arr1
//per copiarlo devo scrivere:
let arr1=[1,2,3,4,5];
const copy = [...arr1]; //sintassi più utilizzata
const copy2 = Array.from(arr1); //secondo metodo
const copy3 = arr1.slice(0); //terzo metodo

*/