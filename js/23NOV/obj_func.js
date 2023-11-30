// i tre puntini ... in javascript si chiamano spread operator

// Utilizzando lo spread operator possiamo unire due array

/*
    const arr1 = [1,2];
    const arr2 = [1,2];
    const mergedArray = [...arr1, ...arr2];
*/

// Similimente possiamo copiare oggetti

/*
    const obj1 = { a : 1, b: 2, c: 3};
    const obj2 = {...obj1};
*/

//Se unisco due oggetti

/*
    const obj3 = { a: 1, b: 2};
    const obj4 = { b: 3, d: 4};
    const mergedObj = { ...obj3, ...obj4 }; //mergedObj = { a: 1, b: 3, d: 4 }, 
    /*mergedObj = { a: 1, b: 3, d: 4 }, 
    se uno non ha proprietà dell'altro questa 
    di quelle in comune troverò l'ultima 
    se uno non ha proprietà dell'altro questa viene aggiunta
    di quelle in comune troverò l'ultima
*/

// Function: insieme di istruzioni racchiuse in un blocco di codice

//dichiarazione di una funzione

// function nomeFunzione ( ) {
//     //istruzioni
// }

// Invocare / Chiamare una funzione

/*
    nomeFunzione(); //se la funzione non prende argomenti ed è void
*/

// Passare parametri a una funzione

/*
    function nomeFunzione(parametro){
        return (risultato)
    }
*/

//Posso dare valori di default ai parametri di una funzione in questa maniera

/*
    function nomeFunzione (parametro1 = valore1, parametro2 - valore2, ...){

    }
*/

// Inner functions e Outer functions

// Una Inner function è una funzione che definisco all'interno di un'altra funzione
// non è inoltre una funzione globale, posso chiamarla solo all'interno della function in cui è innestata
// L'outer function è una funzione non innestata in alcun'altra funciton

// Scope = Ambito di visibilità

/*
    Se ho un oggetto che uso posso fare una destrutturazione dell'oggetto per prendere le sue proprietà
    ex:
    const user = { firstName: 'Mario', lastName: 'Rossi', id: 10};
    const { firstName, lastName, id } = user;
*/

// nota l'array è un oggetto con chiavi numeriche, incrementali e posizionali

// IIFE - Immediately Invoked Function Expression

/*
function () {//function anonima
  //roba
}
*/

// se la scrivo così verrà eseguita appena dichiarata

/*
(function () {
  //cose
})();
*/


// Callback function

function ciao(name, callbackFn){
    console.log ("Hello, " + name + "!");
    callbackFn(); //posso passare una funzione come argomento di un'altra funzione
}

function sayGoodbye () {
    console.log ("Goodbye!");
}

ciao('Mario', sayGoodbye ); 
//la funzione che viene chiamata senza parentesi mi raccomando
//altrimenti non chiamo la funzione ma il suo ritorno.


// Arrow functions, scrittura alternativa delle funzioni

const sayHello = () => {
    console.log ('ciao');
}

//sostanzialmente assegno una funzione anonima a una costante.

//se le passo dei parametri

const sayCiao = (name, lastname) =>{
    //cose
}

//se passo solo un parametro posso omettere le parentesi tonde
//se ho solo un'istruzione posso omettere le parentesi graffe e scrivere tutto su una sola riga

//Corpo ridotto (senza utilizzo delle graffe e inline), la arrow function effettua il return dell'istruzione

