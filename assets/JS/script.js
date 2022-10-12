const tariffaKm = 0.21;
const maggioreEta = 18;
const overEta = 65;
const scontoVenti = 20;
const scontoQuaranta = 40;
let sconto;
let prezzoFinale;

const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){
    
    const name = document.getElementById('nome-utente').value;   
    document.getElementById('nome-utente').value = name;
    
    const distanza = document.getElementById('distanza').value;    
    document.getElementById('distanza').value = distanza;
    
    const etaUtente = document.getElementById('eta-utente').value; 
    document.getElementById('eta-utente').value = etaUtente;
    
    const prezzoBiglietto = tariffaKm * distanza;

    if (etaUtente < maggioreEta){
        sconto = (prezzoBiglietto / 100) * scontoVenti;
        prezzoFinale = prezzoBiglietto - sconto;
        document.getElementById('tipo-biglietto').innerHTML += 'Sconto minorenni';
    }

    else if (etaUtente >= overEta ){
        sconto = (prezzoBiglietto / 100) * scontoQuaranta;
        prezzoFinale = prezzoBiglietto - sconto;
        document.getElementById('tipo-biglietto').innerHTML += 'Sconto over 65';
    }

    else{
        prezzoFinale = prezzoBiglietto
        document.getElementById('tipo-biglietto').innerHTML += 'Biglietto standard';
    }


    document.getElementById('nome-utene').innerHTML += name;

    let prezzoFinaleFixed = prezzoFinale.toFixed(2);
    let outputPrezzoFinale = `<strong class="color-output">${prezzoFinaleFixed} €<strong>`
    document.getElementById('prezzo').innerHTML += outputPrezzoFinale;


    
});









