/* Caesar Cipher */

function makeSecret (message) {
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var messageArray = message.toLowerCase().replace(/\s+/g, '-').split("");
	var encodedMessageArray = [];

	for (var i = 0; i < messageArray.length; i++) {
		if (messageArray[i] === "-"){
			encodedMessageArray.push(" ");
		} else {
		var x = alphabet.indexOf(messageArray[i]);
		var y = alphabet[x + 3];
		encodedMessageArray.push(y);
		}
	};

	return encodedMessageArray.join("");
};