function main(arr) {
    let count = +arr.pop();
    count %= arr.length;
    

    for (let i = 0; i < count; i++) {
        let lastElement = arr.pop();  
        arr.unshift(lastElement);      
    }

    console.log(arr.join(' '));
}

main(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);
main(['1', 
'2', 
'3', 
'4', 
'2']
);