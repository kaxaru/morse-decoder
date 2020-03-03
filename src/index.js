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

const ALPHABET_TO_MORSE = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..', 
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q':  '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    ' ': '**********',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----'
}

function encode(expr) {
    let encode = '';

    [...expr].map(el => {
        encode += el === ' ' ? ALPHABET_TO_MORSE[el] : ((string) => { return string.length < 10 ? '0'.repeat(10 - string.length) + string : string })([...ALPHABET_TO_MORSE[el]].map(el => {
            return el === '.' ? '10' : '11'
        }).join(''))
    })
    return encode
}

function decode(expr) {
    let lettersCipher = Array.from({length: expr.length / 10}, (k, n) => n).map((el, idx) => expr.slice(idx * 10, 10 + idx * 10)).map(el => el.split('00').join(''))
    
    let phrase = lettersCipher.map(letter => {
        return letter == '**********' ? ' ' : MORSE_TABLE[Array.from({length: letter.length / 2}, (k, n) => n).map((el, idx) =>  letter.slice(idx*2, 2 + idx*2) === '10' ? '.': '-').join('')]
    })

    return phrase.join('')
}

module.exports = {
    decode
}