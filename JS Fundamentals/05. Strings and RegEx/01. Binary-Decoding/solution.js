function solve() {
  let inputElement = document.getElementById('str');
  let outputElement = document.getElementById('result');

  let num = sumNumbers(inputElement.value);
  let end = inputElement.value.length - num;

  let result = inputElement.value.slice(num, end);

  let parts = result
    .split(/([\d]{8})/)
    .filter((x) => x)
    .map((x) => binaryToString(x))
    .filter((x) => /[A-Za-z ]+/g.test(x))
    .join('');


  outputElement.textContent = parts;


  function sumNumbers(value) {
    let result = value;

    while (result.length > 1) {
      let temp = result
        .split('')
        .reduce((a, b) => +a + +b)
        .toString();

      result = temp;
    }

    return +result;
  }

  function binaryToString(element) {
    let decimal = parseInt(element, 2);
    return String.fromCharCode(decimal);
  }
}