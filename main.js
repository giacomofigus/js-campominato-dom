//CORREZIONE
let btnHtml = document.getElementById("button");
let grigliaHtml = document.getElementById("grid");
const selectHtml = document.getElementById("menu");

let arrayNumb = [];
let giocoInCorso = true


btnHtml.addEventListener('click', function(){
    grigliaHtml.style.setProperty("display", "flex")

    grigliaHtml.innerHTML = ''

    console.log(selectHtml.value);

    // Riempio l'array con numeri casuali
    for(let i = 0; arrayNumb.length < 16; i++) {
        let randomNumb = Math.floor(Math.random() * selectHtml.value) + 1;

        if(arrayNumb.indexOf(randomNumb) === -1) {
            arrayNumb.push(randomNumb)
        }                
    }

    // creo i box
    for(let i = 1; i <= selectHtml.value; i++) {
        let box = document.createElement("div")
        box.style.setProperty("flex-basis", `calc(100% / ${Math.sqrt(selectHtml.value)})`)
        box.innerHTML = `<span>${i}</span>`
        box.classList.add("box-easy")

        box.addEventListener('click', function(){
            if (giocoInCorso){
                let spanHtml = parseInt(this.querySelector("span").innerText);

                if (arrayNumb.includes(spanHtml)) {
                    this.classList.add("rosso");
                    giocoInCorso = false;
                    alert("Hai perso")
                } else{
                    this.classList.add("blue")
                }
    
                console.log(arrayNumb);
                console.log(`Hai cliccato il numero: ${spanHtml}`);
            }

        })

        

        grigliaHtml.appendChild(box);
    }
})








/*
Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/