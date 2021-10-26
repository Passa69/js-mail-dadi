// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer, stabilire il vincitore, in base a chi fa il punteggio più alto.

// richiesta numero all'utente
const userNum = parseInt(prompt("Inserisci qui un numero tra 1 e 6: "));
console.log(userNum);

// generazione casuale di numero da pc
const pcNum = Math.floor(Math.random() * (6 - 1) + 1);
console.log(pcNum);