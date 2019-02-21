function gtc(first, second) {
    
    if (second === 0) {
        return first;
    }

    return gtc(second, first % second);
}

console.log(gtc(252, 105));
