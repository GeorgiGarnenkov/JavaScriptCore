function main(arr) {
    
    let delimiter = arr[arr.length - 1];

    arr.pop();

    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result += arr[i];
        } else{
            result += delimiter + arr[i];  
        }
    }

    console.log(result);
}

main(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
);