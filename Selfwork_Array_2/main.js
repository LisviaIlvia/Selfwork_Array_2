// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media: 

let a = [3, 5, 10, 2, 8];

let somma = a.reduce((acc, n)=> acc + n);

let media = somma/a.length;


console.log(`La media è: ${media}`);

let minori = a.filter((number)=> number <= media);

let maggiori = a.filter((number)=> number > media);

console.log(`I numeri minori della media sono: ${minori}.\nIn totale sono ${minori.length}.`);
console.log(`I numeri maggioriri della media sono: ${maggiori}.\nIn totale sono ${maggiori.length}.`);

