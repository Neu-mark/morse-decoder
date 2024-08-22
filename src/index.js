const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    let part = expr.slice(i, i + 10);

    if (part === '**********') {
      result += ' ';
    } else {
      let morseChar = '';
      for (let j = 0; j < 10; j += 2) {
        let symbol = part.slice(j, j + 2);
        if (symbol === '10') morseChar += '.';
        if (symbol === '11') morseChar += '-';
      }
      result += MORSE_TABLE[morseChar];
    }
  }

  return result;
}

module.exports = {
  decode,
};
