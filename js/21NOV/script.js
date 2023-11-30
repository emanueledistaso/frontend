//Esercizi di JS dati da Davide in ordine di difficoltà

// Modulo 1

// console.log ("Hello World!");

// let a, b, c, d, e;
// a=1;
// b=5;
// c=19;
// d=92;
// e=3;

// sum=a+b+c+d+e;
// average=sum/5;

// console.log(sum, average);

// let name, age, exp;
// name = "Emanuele";
// age = 25;
// exp = false;

// console.log("Hello, my name is", name , ", I am ", age, " years old and I can code JavaScript: ",
// exp);

// let secondiTotali, ore, minuti, secondi;
// secondiTotali = 12560;
// secondi=secondiTotali%60;
// secondiTotali-= secondi;
// minuti = (secondiTotali % 3600)/60;
// secondiTotali -= minuti*60;
// ore= secondiTotali/3600;

// console.log(ore, minuti, secondi)

// let miles = 500;
// let kilometres = 1.60934*miles;
// console.log("The distance of",kilometres," kms is equal to ", miles," miles");

//ARRAYS. MODULO 2

// let lista = ['Milk', 'Bread','Apples'];
// lista.splice(1,1, 'Bananas', 'Eggs');
// console.log(lista.pop);
// lista.sort;
// let index = lista.indexOf('Milk');
// index = lista.indexOf('Bananas');
// lista.splice(index,0,'Carrots','Lettuce');
// let lista2 = ['Juice','Pop'];
// let listaFinale = lista.concat(lista2,lista2);

// let listaNum=[1,2,3];
// let listaDiListe = [listaNum, listaNum, listaNum];
// console.log(listaDiListe);

//CONDIZIONALI MODULO 3

//let age = 3;

//  if (!(age >= 14 && age <= 90)){
//      console.log("Età non compresa nei valori selezionati");
//  }

//  //Alternativaamente prendo il complementare dell'intervallo utilizzando l'OR

// let myTrue = true;

// if (!myTrue){
//     console.log("Vero");
// } else{
//     console.log("Falso");
// }

//ETÀ ED ENTRATA

// let age = prompt("Inserisci la tua età");
// let message;
// if (age >= 21) {
//   message = "Puoi entrare e bere alcol";
// } else if ( age >= 19) {
//   message = "Puoi entrare ma non toccare l'alcol";
// } else {
//   message = " Non puoi entrare";
// }

// console.log(message);

//MINIMO TRA DUE NUMERI

// let a=3, b=6;
// let min=a;

// if (b<min){
//     min=b;
// }

// let numero = prompt("Inserisci un numero");

// if (numero % 2){
//     console.log("È dispari");
// } else {
//     console.log("È pari");
// }

// let username = prompt("Inserisci nome utente");
// let psw;

// if (username == "admin"){
//     psw = prompt("Inserisci password");
//     if (psw == "TheMaster"){
//         console.log ("Welcome!");
//     } else if (psw == "Esc" || psw == ""){
//         console.log("Cancelled");
//     } else {
//         console.log("Wrong password");
//     }
// } else if (username == "Esc" || username == ""){
//     console.log("Cancelled");
// } else {
//     console.log("I don't know you");
// }

// let randomNum;
// randomNum = Math.random() * 6;
// randomNum = Math.floor(randomNum);
// let question = prompt('What will you ask to the magic ball?');
// let reply;
// switch (randomNum) {
//   case 0:
//     reply = 'Maybe not';
//     break;
//     case 1:
//     reply = "Yes";
//     break;
//   case 2:
//     reply = "Maybe";
//     break;
//   case 3:
//     reply = "Absolutely Not";
//     break;
//   case 4 :
//     reply = 'No';
//     break;
//   case 5 :
//     reply ='Surely';
//     break;
// }

// console.log (question, reply);