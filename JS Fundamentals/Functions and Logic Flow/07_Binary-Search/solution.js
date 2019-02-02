function binarySearch() {
    let array = document.getElementById('arr').value;
    let number = Number(document.getElementById('num').value);

    array = array.split(', ').map(x => parseInt(x, 10));
    let index = array.indexOf(number);
    if (index !== -1) {
        document.getElementById('result').textContent = `Found ${number} at index ${index}`;
    } else{
        document.getElementById('result').textContent = `${number} is not in the array`;
    }
}