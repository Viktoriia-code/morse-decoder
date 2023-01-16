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
    var uncodedStr = [];
    var currStr = '';
    for (let i=0;i<expr.length;i++){
        currStr += expr[i];
        if (currStr.length == 10) {
            uncodedStr.push(currStr);
            currStr = "";
        };
    };
    for (let j=0;j<uncodedStr.length;j++){
        if (uncodedStr[j] !== '**********') {uncodedStr[j]=Number(uncodedStr[j])}
    };
    for (let j=0;j<uncodedStr.length;j++){
        if (uncodedStr[j] !== '**********') {uncodedStr[j]=String(uncodedStr[j])}
    };
    var morzedStr = '';
    var currMorzStr = '';
    for (let k=0;k<uncodedStr.length;k++){
        for (let f=0;f<uncodedStr[k].length;f++){
            currMorzStr += uncodedStr[k][f];
            if (currMorzStr.length==2) {
                if (currMorzStr==10){morzedStr+="."}
                else if (currMorzStr==11){morzedStr+="-"}
                else if (currMorzStr=='**'){morzedStr+=" "}
                currMorzStr = "";
            };
            if ((morzedStr.length*2)==uncodedStr[k].length){
                uncodedStr[k]=morzedStr;
                morzedStr = "";
            };
        };
    };
    var myStr = '';
    for (let t=0;t<uncodedStr.length;t++) {
        if (uncodedStr[t]=='     ') {
            myStr += ' ';
        }else{
            myStr += MORSE_TABLE[uncodedStr[t]];
        }
    }
    return myStr;
}

module.exports = {
    decode
}