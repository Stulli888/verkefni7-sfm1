/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

/**
 * Byrja forrit.
 */
function start() {
	let action = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“')
	if (action != 'kóða' && action != 'afkóða' ) {
		alert(`Veit ekki hvaða aðgerð „${action}“ er. Reyndu aftur.`)
		start()
	}
	let n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]')
  	if (n<0 || n>32) {
  		alert(`${n} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`)
  		start()
	}
	let str = prompt(`Gefðu upp strenginn sem á að ${action} með hliðrun ${n}:`)
	code = encode(str, n)
	//console.log(str,n)
	//console.log(encode('ASDF', 3))
}




// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
	let str2 = ''
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < LETTERS.length; j++) {
			if (str[i]==LETTERS[j]) {
				if(j+n>31){
				str2 += LETTERS[j+n-32]
				} else {
					str2 += LETTERS[j+n]
				}
			}
		}
	}
  return str2 +'';
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
	let str2 = ''
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < LETTERS.length; j++) {
			if (str[i]==LETTERS[j]) {
				if(j-n<0){
				str2 += LETTERS[j-n+32]	
				} else {
					str2 += LETTERS[j-n]
				}
			}
		}
	}
  return str2;
 }

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
