// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.

//  creazione array
const pcMail = ["passarotto13@gmail.com", "tpassarotto@gmail.com", "tommaso.passarotto@gmail.com"];
// console.log(pcMail);
for (let i = 0; i < pcMail.length; i++) {
    console.log(pcMail[i]);
}
pcMail[0] 
pcMail[1]
pcMail[2]

// Richiesta all'utente
const userMail = prompt("Scrivi qui la tua Email: ");
console.log(userMail);

// condizione di veridicità per mail
if (userMail === pcMail[0] || userMail === pcMail[1] || userMail === pcMail[2]) {
    document.getElementById("container").innerHTML = "La tua Email è corretta."
} else {
    document.getElementById("container").innerHTML = "La tua Email non è corretta."
}