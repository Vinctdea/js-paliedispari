// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const numUser = document.getElementById("numero_user");
const pariDispari = document.getElementById("pari_dispari");
const start = document.getElementById("btn")


// gestisco click per prendere valori
start.addEventListener("click",
    function(){
        let valoreUser = parseInt(numUser.value);
        let valorePariDispari = pariDispari.value;
        let numPc = numRandom(1, 5);
        console.log(valorePariDispari,valoreUser,numPc);
        let risultato = sommaPariDispari(numPc, valoreUser);
        console.log(risultato);
        

    }
);



// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numRandom(min, max) {
     return Math.floor(Math.random() * (1 + max - min)) + min;
  }
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)


function sommaPariDispari(num1,num2){
    let risultatoSomma= parseInt(num1+num2);
    if (risultatoSomma % 2 === 0){
        return "la somma dei numeri è pari";
    } else {
        return "la somma dei numeri è dispari";
    }

}
// Dichiariamo chi ha vinto.