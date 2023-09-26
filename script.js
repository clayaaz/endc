document.addEventListener('DOMContentLoaded', function () {
    const code = {
        "a": "^",
        "b": "#",
        "c": "D",
        "d": "V",
        "e": "q",
        "f": "-",
        "g": "{",
        "h": ";",
        "i": "<",
        "j": ">",
        "k": "%",
        "l": "*",
        "n": "(",
        'm': "l",
        "o": "+",
        "p": "K",
        "q": "1",
        "r": "7",
        "s": "3",
        "t": "9",
        "u": "n",
        "v": "r",
        "w": "|",
        "x": ",",
        "y": "o",
        "z": ":",
        "0": "$",
        "1": "!",
        "2": "&",
        "3": "'",
        "4": "/",
        "5": "?",
        "6": "i",
        "7": "=",
        "8": "~",
        "9": "`"
    };

    const inverseCode = {
        "^": "a",
        "#": "b",
        "D": "c",
        "V": "d",
        "q": "e",
        "-": "f",
        "{": "g",
        ";": "h",
        "<": "i",
        ">": "j",
        "%": "k",
        "*": "l",
        "(": "n",
        "l": "m",
        "+": "o",
        "K": "p",
        "1": "q",
        "7": "r",
        "3": "s",
        "9": "t",
        "n": "u",
        "r": "v",
        "|": "w",
        ",": "x",
        "o": "y",
        ":": "z",
        "$": "0",
        "!": "1",
        "&": "2",
        "'": "3",
        "/": "4",
        "?": "5",
        "i": "6",
        "=": "7",
        "~": "8",
        "`": "9"
    };

    const typetext = document.getElementById('typetext');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const output = document.getElementById('output');

    function encrypt() {
        const inputText = typetext.value.toLowerCase();
        let newText = '';
        for (let x of inputText) {
            if (x === " ") {
                newText += " ";
            } else {
                newText += code[x];
            }
        }
        output.textContent = newText;
    }

    function decrypt() {
        const inputText = typetext.value;
        let newText = '';
        for (let x of inputText) {
            if (x === " ") {
                newText += " ";
            } else {
                newText += inverseCode[x];
            }
        }
        output.textContent = newText;
    }

    encryptButton.addEventListener('click', encrypt);
    decryptButton.addEventListener('click', decrypt);
});
