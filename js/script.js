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
// var parInv = parolaUtente.split("").reverse().join("");
// console.log(parInv);

// inserire le parole dentro un array
var verUtente = [parolaUtente];
console.log(verUtente);
var verInv = [parInv];
console.log(verInv);

// verificare se la parola è palindroma
var parFine = verUtente == verInv;
parFine = false;

if (parFine == true) {
  console.log("La parola" + " " + parolaUtente + " " + "è palindroma");
}
else {
  console.log("La parola" + " " + parolaUtente + " " + "non è palindroma");
}
