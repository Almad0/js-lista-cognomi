var userNameInput = prompt("Per favore, inserisci il tuo nome");

///CAPITALIZE PER UN SORT PIU PRECISO
var firstSurname = userNameInput.slice(0,1).toUpperCase();
var restSurname = userNameInput.slice(1,userNameInput.length).toLowerCase();
userNameInput = firstSurname + restSurname;

/// PUSH + ORDINE ALFABETICO
var nameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
nameList.push(userNameInput);
nameList.sort();
// console.log(nameList); --- SORT SULL'ARRAY


/// INDIVIDUAZIONE DELLA POSIZIONE DEL NOME NELL'ARRAY
var i=0;
while (userNameInput != nameList[i]) {
  i++;
}
// console.log(nameList[i]); --- CONTROLLO DLE NOME CORRETTO

///VISUALIZZARE LA LISTA COMPLETA
for (var j = 0; j < nameList.length; j++) {
  var itemName = nameList[j];
  var userName = document.getElementById('list').innerHTML;
  document.getElementById('list').innerHTML = userName + "<li>" + itemName + "</li>";
}

/// +1 PERCHE L'ARRAY INIZIA IL CONTEGGIO DA 0
document.getElementById('name').innerHTML = i+1;



///FINE
