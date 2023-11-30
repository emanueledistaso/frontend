let contatore = 0;
let bottone = document.getElementById("daCliccare");
let displayContatore = document.getElementById("contatore");
bottone.addEventListener("click", function (){
    contatore +=1;
    displayContatore.innerText = 'Hai cliccato ' + contatore + ' volte';
})