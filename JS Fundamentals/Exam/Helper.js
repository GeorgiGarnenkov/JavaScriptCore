function getParentNodeByTagName(element, tagName) {
    while (element !== null && element.tagName !== tagName) {
        element = element.parentNode;
    }

    return element;
}

function createElement(type, text, className) {
    let element = document.createElement(type);

    element.textContent = text;

    element.classList.add(className);

    return element;
}

function sortString(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join(' ');
}

function sortReverseString(str) {
    let arr = str.split('');
    let sorted = arr.sort().reverse();
    return sorted.join('');
}

function rotateElements(num, str) {
    let arr = str.split('');

    for (let i = 0; i < num; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    let rotated = arr.join('');
    return rotated;
}