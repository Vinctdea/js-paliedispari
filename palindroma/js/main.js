// Palidroma
// Chiedere all’utente di inserire una parola
// gestisco input user al click
const verifica = document.querySelector("#button")

// confrontare le parole con la funzione 
verifica.addEventListener("click",
    function(){
        let parola = document.getElementById("parola");
        let valoreParola = parola.value;
        let risultato = VerificaPalindromi(valoreParola);
        console.log(risultato);
        
        //  stampare il risultato
        const result = document.querySelector("h2");
        result.innerHTML = risultato;

    }
)




// Creare una funzione per capire se la parola inserita è palindroma
function VerificaPalindromi(input){
    // Scomposizione della parola in singoli caratteri
    let caratteri = input.split('');
// Creazione di una versione invertita della parola
    let invertita = caratteri.reverse().join('');

// Verifica se la parola è palindroma
    if (input === invertita) {
	return input + " è una parola palindroma.";
    } else {
	return input + " non è una parola palindroma.";
    }

}
