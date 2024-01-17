//CORREZIONE
let btnHtml = document.getElementById("button")
let grigliaHtml = document.getElementById("grid")
const selectHtml = document.getElementById("menu")





btnHtml.addEventListener('click', function(){
    grigliaHtml.style.setProperty("display", "flex")

    grigliaHtml.innerHTML = ''

    // creo 100 box
    for(i = 1; i <= selectHtml.value; i++){
        // creo box generale
        let box = document.createElement("div")

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

            //aggiungo il numero al click
            //gli aggiungo il colore azzurro
            this.classList.toggle("blue")

            // mostro nel log il numero selezionato 
            console.log(`Hai cliccato il numero: ${spanHtml}`);
        })

        // inserisco all'interno della griglia 
        grid.appendChild(box)
    }
})

/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/