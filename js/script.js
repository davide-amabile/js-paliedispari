// controllare se la parola è palindroma

// chieder se la parola
var  parolaUtente = prompt("Inserire la parola");

// separare le lettere in stringe
var  parSep = parolaUtente.split("");
// console.log(parSep);

// invertire le lettere separate
strInv = parSep.reverse();
// console.log(strInv);

// riunire le lettere
parInv = strInv.join("");
// console.log(parInv);

// verificare se la parola è palindroma
var parFine = parolaUtente === parInv
parFine = false;

if (parFine = true) {
  console.log("La parola" + " " + parolaUtente + " " + "è palindroma");
}
else {
  console.log("La parola" + " " + parolaUtente + " " + "non è palindroma");
}
