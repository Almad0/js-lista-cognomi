/// Esercizio ordinamento nomi



//Chiedi all'utente il cognome
//inseriscilo in un array con altri cognomi
//stampa la lista ordinata alfabeticamente
//scrivi anche la posizione della lista in cui il nuovo utente si trova




// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova



var userNameInput = prompt("Per favore, inserisci il tuo nome");

///CAPITALIZE PER UN SORT PIU PRECISO
var firstSurname = userNameInput.slice(0,1).toUpperCase();
var restSurname = userNameInput.slice(1,userNameInput.length).toLowerCase();
userNameInput = firstSurname + restSurname;


var nameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

console.log(nameList);

nameList.push(userNameInput);

console.log(nameList);

nameList.sort();

console.log(nameList);

var i=0;
while (userNameInput != nameList[i]) {
  i++;
  console.log(i);
}

console.log(nameList[i]);

var userName = document.getElementById('nomi');
userName.innerHTML = nameList[i];
















///FINE
