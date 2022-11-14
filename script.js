const input = document.querySelector(".inputTxt");
const output = document.querySelector(".outputTxt");

function checkword(word) {
    for (let c of word) {
        if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == ' ' || c == '.' || c == ',' || c == '!' || c == '(' || c == ')' || c == '{' || c == '}' || c == '/'))
            return false;
    }
    return true;
}

document.querySelector("button").addEventListener('click', () => {
    output.innerHTML = "";
    const words = input.value.split(" ");
    console.log("a");
    let i = 1;

    for (let word of words) {
        if (checkword(word) && (word.length > 2)) {
            let n = word.length;
            word = word.replaceAll('b', '<b>' + "b" + '</b>');
            word = word.replaceAll('c', '<b>' + "c" + '</b>');
            word = word.replaceAll('d', '<b>' + "d" + '</b>');
            word = word.replaceAll('f', '<b>' + "f" + '</b>');
            word = word.replaceAll('g', '<b>' + "g" + '</b>');
            word = word.replaceAll('h', '<b>' + "h" + '</b>');
            word = word.replaceAll('j', '<b>' + "j" + '</b>');
            word = word.replaceAll('k', '<b>' + "k" + '</b>');
            word = word.replaceAll('l', '<b>' + "l" + '</b>');
            word = word.replaceAll('m', '<b>' + "m" + '</b>');
            word = word.replaceAll('n', '<b>' + "n" + '</b>');
            word = word.replaceAll('p', '<b>' + "p" + '</b>');
            word = word.replaceAll('q', '<b>' + "q" + '</b>');
            word = word.replaceAll('r', '<b>' + "r" + '</b>');
            word = word.replaceAll('s', '<b>' + "s" + '</b>');
            word = word.replaceAll('t', '<b>' + "t" + '</b>');
            word = word.replaceAll('v', '<b>' + "v" + '</b>');
            word = word.replaceAll('w', '<b>' + "w" + '</b>');
            word = word.replaceAll('x', '<b>' + "x" + '</b>');
            word = word.replaceAll('y', '<b>' + "y" + '</b>');
            word = word.replaceAll('z', '<b>' + "z" + '</b>');
            word = word.replaceAll('B', '<b>' + "B" + '</b>');
            word = word.replaceAll('C', '<b>' + "C" + '</b>');
            word = word.replaceAll('D', '<b>' + "D" + '</b>');
            word = word.replaceAll('F', '<b>' + "F" + '</b>');
            word = word.replaceAll('G', '<b>' + "G" + '</b>');
            word = word.replaceAll('H', '<b>' + "H" + '</b>');
            word = word.replaceAll('J', '<b>' + "J" + '</b>');
            word = word.replaceAll('K', '<b>' + "K" + '</b>');
            word = word.replaceAll('L', '<b>' + "L" + '</b>');
            word = word.replaceAll('M', '<b>' + "M" + '</b>');
            word = word.replaceAll('N', '<b>' + "N" + '</b>');
            word = word.replaceAll('P', '<b>' + "P" + '</b>');
            word = word.replaceAll('Q', '<b>' + "Q" + '</b>');
            word = word.replaceAll('R', '<b>' + "R" + '</b>');
            word = word.replaceAll('S', '<b>' + "S" + '</b>');
            word = word.replaceAll('T', '<b>' + "T" + '</b>');
            word = word.replaceAll('V', '<b>' + "V" + '</b>');
            word = word.replaceAll('W', '<b>' + "W" + '</b>');
            word = word.replaceAll('X', '<b>' + "X" + '</b>');
            word = word.replaceAll('Y', '<b>' + "Y" + '</b>');
            word = word.replaceAll('Z', '<b>' + "Z" + '</b>');

            output.innerHTML += word + " ";
        }
        else {
            output.innerHTML += '<b>' + word + '</b>' + " ";
            console.log(word);
        }
        i++;
    }
});







