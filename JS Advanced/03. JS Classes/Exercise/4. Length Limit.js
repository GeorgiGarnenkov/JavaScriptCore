class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        let result = this.innerLength + length;

        if(result < 0){
            this.innerLength = 0;
        } else {
            this.innerLength += length;
        }
    }

    decrease(length) {
        let result = this.innerLength - length;
        
        if(result < 0){
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        return this.innerString.substr(0, this.innerLength) + "...";
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
