function main(arr) {

    let lastElement = Number(arr[arr.length - 1]);

    arr.pop();

    for (let i = 0; i < arr.length; i += lastElement) {

        console.log(arr[i]);
    }
}
