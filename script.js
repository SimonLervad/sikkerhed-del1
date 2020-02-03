const $ = function (foo) {
    return document.getElementById(foo);
}

let cipher = "";

let vigenereArr = [];
let count = 0;

let array = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let vArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let kode = function() {
	let txt = prompt('skriv din tekst her');
	$("txtOne").innerHTML += txt;
	for (let i = 0; i < txt.length; i++) {
		let letter = array.indexOf(txt[i]);
		if (letter + 3 > 26) {
			letter = letter - 26;
			cipher = cipher + (array[letter + 3])
		} else {
			cipher = cipher + (array[letter + 3])
		}
	}
	console.log(cipher);
	$("codeOne").innerHTML += cipher;
}

let kodeTwo = function() {
	let txt = prompt('skriv din tekst her');
	$("txtTwo").innerHTML += txt;
	let vigenere = prompt('skriv din nøgle her');
	for (let i = 0; i < vigenere.length; i++) {
		let letter = vArray.indexOf(vigenere[i]);
		vigenereArr.push(letter);
	}
	for (let j = 0; j < txt.length; j++) {
		let letter = array.indexOf(txt[j]);
		let number = letter + vigenereArr[count]
		if (number > 26) {
			number = number - 26;
		}
		cipher = cipher + (array[number]);
		if (count === 2) {
			count = 0;
		} else {
			count++;
		}
	}
	console.log(vigenereArr);
	console.log(cipher);
	$("codeTwo").innerHTML += cipher;
}

let init = function () {
    $("button").addEventListener("click", kode);
    $("button-two").addEventListener("click", kodeTwo);
}

window.addEventListener("load", init);