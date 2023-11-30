let contatore = 0;
let hexacolor = "#FFA500";

let btn = document.getElementById("bottone");
let box = document.getElementById("divVuoto");
btn.innerText = "Cambia Colore";

// al click viene assegnato colore random a background
//al secondo si ritorna a dimensioni pre animazione e si rimuove grande

btn.addEventListener("click", function  () {
    contatore  +=1;
    if (contatore === 2) {
        box.classList.remove("grande");
        box.style.height = "150px";
        box.style.width = "150px";
    } else {
        hexacolor = randomColor();
        box.style.backgroundColor = hexacolor;
    }
});

// al mouse enter mi ricambia in un colore random

box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = randomColor();
})

// al mouseleave torno al colore di prima

box.addEventListener ("mouseleave", function () {
    box.style.backgroundColor = hexacolor;
});

setTimeout( function () {
    box.style.height = "300px";
    box.style.width = "300px";
    box.style.transition = "width 1.5s, height 1.5s";
    box.addEventListener("transitionend", function () {
        box.style.height = "";
        box.style.width = "";
        box.classList.add ("grande");
        }, {once: true})
}, 1000)

//funzione che mi genera un colore esadecimale random

function randomColor () {
    let hexadecimal = "0123456789ABCDEF";
    let color = "";
    for (let i = 0 ; i < 6; i++){
        color += hexadecimal[Math.floor(16*Math.random())];
    }
    return "#" + color;
}



