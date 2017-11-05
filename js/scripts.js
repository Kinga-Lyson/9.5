
// tablica wszystkich buttonów, odwołujemy się tablica[1].właściwość
var buttonItems = document.getElementsByClassName('button');

// ilosc buttonów
var buttonLength = buttonItems.length;

for (var i = 0 ; i < buttonLength ; i++) {
	console.log(buttonItems[i].innerText);
}