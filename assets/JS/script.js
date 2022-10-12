const tariffaKm = 0.21;
const maggioreEta = 18;
const overEta = 65;
const scontoVenti = 20;
const scontoQuaranta = 40;
let sconto;
let prezzoFinale;

const distanza = parseInt(prompt('Inserisci distanza da percorrere'));
const etaUtente = parseInt(prompt('Inserisci l\'età dell\'utente'));

const prezzoBiglietto = tariffaKm * distanza;

if (etaUtente < maggioreEta){
    sconto = (prezzoBiglietto / 100) * scontoVenti;
    prezzoFinale = prezzoBiglietto - sconto;
}
else if (etaUtente >= overEta ){
    sconto = (prezzoBiglietto / 100) * scontoQuaranta;
    prezzoFinale = prezzoBiglietto - sconto;
}
else{
    prezzoFinale = prezzoBiglietto
}

let prezzoFinaleFixed = prezzoFinale.toFixed(2);

let outputDistanza = `${distanza} km`
let outputPrezzoFinale = `<strong class="color-output">${prezzoFinaleFixed} €<strong>`

document.getElementById('distanza').innerHTML += outputDistanza;
document.getElementById('etaUtente').innerHTML += etaUtente;
document.getElementById('prezzo').innerHTML += outputPrezzoFinale;