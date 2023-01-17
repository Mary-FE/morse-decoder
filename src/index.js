const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols_array = [];

    for(let i = 0; i < expr.length; i+=10) {
        if (i + 10 <= expr.length) {
            let symbol = expr.substring(i, i + 10);

            symbol = symbol.replace(/10/gi, '.'); // step 1 - find all dots
            symbol = symbol.replace(/11/gi, '-'); // step 2 - find all dashes
            symbol = symbol.replace(/00/gi, '');  // step 3 - remove empty spaces
            symbol = symbol.replace(/\*\*\*\*\*\*\*\*\*\*/gi, ' ');  // step 4 - find whitespace
            
            symbols_array.push(MORSE_TABLE[symbol] ? MORSE_TABLE[symbol] : symbol);
        }
    }

    return symbols_array.join('');
}

module.exports = {
    decode
}
