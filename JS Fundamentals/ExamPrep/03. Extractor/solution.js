function solve() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');

    let extractButton = document.getElementsByTagName('button')[0];

    extractButton.addEventListener('click', () => {

        let digitPattern = /^([\d]+)/gm;
        let digitMatch = digitPattern.exec(input.value);
        let length = Number(digitMatch[1]);

        let text = input.value.substring(digitMatch[1].length);
        text = text.substr(0, length);

        let lastChar = text.substr(text.length - 1, 1);
        let parts = text.split(`${lastChar}`).filter(x => x !== '');
        
        let regex = new RegExp(`[^${parts[0]}]`, 'g');
        let symbols ='';

        while(match = regex.exec(parts[1])){
            symbols += match[0];
        }

        symbols = symbols.replace(/\#/g, ' ');
        output.value = symbols;
    });
}