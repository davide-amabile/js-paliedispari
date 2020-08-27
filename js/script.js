// controllare se la parola è palindroma

// chiedere la parola
var  parolaUtente = prompt("Inserire la parola");
console.log(parolaUtente);

// separare le lettere in stringe
var  parSep = parolaUtente.split("");
// console.log(parSep);

// invertire le lettere separate
var strInv = parSep.reverse();
// console.log(strInv);

// invertire la parola
var parInv =strInv.join("");
console.log(parInv);

// trasformare lettere in numeri
var numUtente = parolaUtente.charCodeAt();
console.log(numUtente);

var numInv = parInv.charCodeAt();
console.log(numInv);

// verificare se la parola è palindroma
// var parFine = numUtente == numInv;
// parFine = false;

if (numUtente === numInv) {
  console.log("La parola" + " " + parolaUtente + " " + "è palindroma");
}
else {
  console.log("La parola" + " " + parolaUtente + " " + "non è palindroma");
}
