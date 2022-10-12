const tariffaKm = 0.21;
const scontoVenti = 20;
const scontoQuaranta = 40;
let sconto;
let prezzoFinale;

// BOTTONE "GENERA"
const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){

    //INPUT-OUTPUT NOME UTENTE
    const name = document.getElementById('nome-utente').value;   
    //INPUT-OUTPUT DISTANZA DA PERCORRERE
    const distanza = document.getElementById('distanza').value;    
    //INPUT ETA UTENTE
    const etaUtente = document.getElementById('eta-utente').value;

    //CALCOLO COSTO IN BASE ALLA DISTANZA
    const prezzoBiglietto = tariffaKm * distanza;

    // CALCOLO BIGLIETTO PER MINORENNE
    if (etaUtente === "min"){
        sconto = (prezzoBiglietto / 100) * scontoVenti;
        prezzoFinale = prezzoBiglietto - sconto;
        document.getElementById('tipo-biglietto').innerHTML += 'Sconto minorenni';
    }
    // CALCOLO BIGLIETTO PER OVER 65
    else if (etaUtente === "over"){
        sconto = (prezzoBiglietto / 100) * scontoQuaranta;
        prezzoFinale = prezzoBiglietto - sconto;
        document.getElementById('tipo-biglietto').innerHTML += 'Sconto over 65';
    }
    // PREZZO STANDARD PER MAGGIORENNI
    else{
        prezzoFinale = prezzoBiglietto
        document.getElementById('tipo-biglietto').innerHTML += 'Biglietto standard';
    }

    // OUTPUT NOME UTENTE SU TICKET
    document.getElementById('nome-utene').innerHTML += name;

    // OUTPUT PREZZO FIXED SU TICKET
    let prezzoFinaleFixed = prezzoFinale.toFixed(2);
    let outputPrezzoFinale = `<strong class="color-output">${prezzoFinaleFixed} €<strong>`
    document.getElementById('prezzo').innerHTML += outputPrezzoFinale;
});