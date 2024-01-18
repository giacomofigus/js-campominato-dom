//CORREZIONE
let btnHtml = document.getElementById("button");
let grigliaHtml = document.getElementById("grid");
const selectHtml = document.getElementById("menu");
let punteggioHtml = document.getElementById("punteggio")

let arrayNumb = [];
let giocoInCorso = true;

// al click del bottone
btnHtml.addEventListener('click', function(){
    grigliaHtml.style.setProperty("display", "flex")

    let punteggio = 0;

    // così che le griglie non si sommino al click
    grigliaHtml.innerHTML = ''


    // Riempio l'array con numeri casuali
    for(let i = 0; arrayNumb.length < 16; i++) {
        let randomNumb = Math.floor(Math.random() * selectHtml.value) + 1;

        if(arrayNumb.indexOf(randomNumb) === -1) {
            arrayNumb.push(randomNumb)
        }                
    }

    // creo i box
    for(let i = 1; i <= selectHtml.value; i++) {

        //Creo il div box
        let box = document.createElement("div")

        // Gli do la proprietà  in modo che la griglia cambi in base alla difficoltà
        box.style.setProperty("flex-basis", `calc(100% / ${Math.sqrt(selectHtml.value)})`)

        // inserisco nella box il numero 
        box.innerHTML = `<span>${i}</span>`

        //gli aggiungo la classe css 
        box.classList.add("box-easy")

        // AL CLICK DEL BOX
        box.addEventListener('click', function(){

            //se la variabile booleana è true
            if (giocoInCorso){

                // al click appare il numero nella box
                let spanHtml = parseInt(this.querySelector("span").innerText);

                //se l'array contiene un numero nello span
                if (arrayNumb.includes(spanHtml)) {
                    //al click della box rossa il gioco termina
                    this.classList.add("rosso");
                    giocoInCorso = false;
                    alert("Hai perso")

                    //mostra il punteggio
                    punteggioHtml.innerHTML = `Punteggio: ${punteggio}`

                } else{
                    //se clicca blu continua
                    this.classList.add("blue")

                    const celleBlu = document.querySelectorAll('.box-easy.blue')

                    // se il numero di celle blu è uguale al valore della select - numero degli elementi nell'array hai vinto
                    if(celleBlu.length == selectHtml.value - arrayNumb.length){
                        giocoInCorso = false;
                        alert("Hai vinto")
                    }

                    //il punteggio aumenta ad ogni click della cella
                    punteggio++

                }

                
                console.log(`Hai cliccato il numero: ${spanHtml}`);
            } 

        })

        
        //INSERISCI BOX
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