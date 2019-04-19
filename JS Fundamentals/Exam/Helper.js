// function getParentNodeByTagName(element, tagName) {
//     while (element !== null && element.tagName !== tagName) {
//         element = element.parentNode;
//     }

//     return element;
// }

// function createElement(type, text, className) {
//     let element = document.createElement(type);

//     element.textContent = text;

//     element.classList.add(className);

//     return element;
// }

// function sortString(str){
//   var arr = str.split('');
//   var sorted = arr.sort();
//   return sorted.join(' ');
// }

// function sortReverseString(str) {
//     let arr = str.split('');
//     let sorted = arr.sort().reverse();
//     return sorted.join('');
// }

// function rotateElements(num, str) {
//     let arr = str.split('');

//     for (let i = 0; i < num; i++) {
//         let lastElement = arr.pop();
//         arr.unshift(lastElement);
//     }
//     let rotated = arr.join('');
//     return rotated;
// }

// JS array equivalents to C# LINQ methods - by Dan B.

// Here's a simple array of "person" objects
var people = [{
        name: "John",
        age: 20
    },
    {
        name: "Mary",
        age: 35
    },
    {
        name: "Arthur",
        age: 78
    },
    {
        name: "Mike",
        age: 27
    },
    {
        name: "Judy",
        age: 42
    },
    {
        name: "Tim",
        age: 8
    }
];


// filter is equivalent to Where

var youngsters = people.filter(function (item) {
    return item.age < 30;
});

console.log("People younger than 30");

console.log(youngsters);


// map is equivalent to Select

var names = people.map(function (item) {
    return item.name;
});

console.log("Just the names of people");

console.log(names);


// every is equivalent to All

var allUnder40 = people.every(function (item) {
    return item.age < 40;
});

console.log("Are all people under 40?"); // false

console.log(allUnder40);


// some is equivalent to Any

var anyUnder30 = people.some(function (item) {
    return item.age < 30;
});

console.log("Are any people under 30?");

console.log(anyUnder30); // true


// reduce is "kinda" equivalent to Aggregate (and also can be used to Sum)

var aggregate = people.reduce(function (item1, item2) {
    return {
        name: '',
        age: item1.age + item2.age
    };
});

console.log("Aggregate age");

console.log(aggregate.age); // { age: 210 }


// sort is "kinda" like OrderBy (but it sorts the array in place - eek!)

var orderedByName = people.sort(function (a, b) {
    return a.name > b.name ? 1 : 0;
})

console.log("Ordered by name");

console.log(orderedByName);


// and, of course, you can chain function calls 

var namesOfPeopleOver30OrderedDesc = people.filter(function (person) {
    return person.age > 30;
}).
map(function (person) {
    return person.name;
}).
sort(function (a, b) {
    return a < b ? 1 : 0;
});

console.log("And now.. the names of all people over 30 ordered by name descending");

console.log(namesOfPeopleOver30OrderedDesc);