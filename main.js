//CORREZIONE
let btnHtml = document.getElementById("button");
let grigliaHtml = document.getElementById("grid");
const selectHtml = document.getElementById("menu");

let arrayNumb = [];

for(let i = 0; arrayNumb.length < 16; i++){
    let randomNumb = Math.floor(Math.random() * selectHtml.value) + 1;
    if(arrayNumb.indexOf(randomNumb) === -1){
        arrayNumb.push(randomNumb)
    }                
}





btnHtml.addEventListener('click', function(){
    grigliaHtml.style.setProperty("display", "flex")

    grigliaHtml.innerHTML = ''

    // creo 100 box
    for(i = 1; i <= selectHtml.value; i++){
        // creo box generale
        let box = document.createElement("div")

        // al click cambia la difficoltà modificando le box
        box.style.setProperty(
            "flex-basis", `calc(100% / ${Math.sqrt(selectHtml.value)}`
        )

        // gli inserisco il numero all'interno
        box.innerHTML = `<span>${i}</span>`

        //renderlo display none così che il numero si veda solo al click
        
        // gli do la calsse
        box.classList.add("box-easy")

        
        // do la funzione al click
        box.addEventListener('click', function(){

            //seleziono la box cliccata
            let spanHtml = this.querySelector("span").innerText

            if(spanHtml === arrayNumb){
                box.classList.add("rosso")
            } else  {
                box.classList.add("blue")
            }
            
            console.log(arrayNumb);

            // mostro nel log il numero selezionato 
            console.log(`Hai cliccato il numero: ${spanHtml}`);
        })

        // inserisco all'interno della griglia 
        grid.appendChild(box)
    }
})




/*
Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/