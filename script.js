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
            word = word.replace(word.substring(0, (n + 1) / 2), '<b>' + word.substring(0, (n + 1) / 2) + '</b>');

            output.innerHTML += word + " ";
        }
        else {
            output.innerHTML += '<b>' + word + '</b>' + " ";
            console.log(word);
        }
        i++;
    }
});







