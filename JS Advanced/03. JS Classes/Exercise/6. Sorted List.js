class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(elemenent) {
        this.numbers.push(elemenent);
        this.numbers.sort((a, b) => a- b);
        this.size++;
        return this.numbers;
    }
    remove(index) {
        if (index >= 0 && index < this.numbers.length) {
            this.numbers.splice(index, 1);
            this.numbers.sort((a, b) => a - b);
            this.size--;
            return this.numbers;
        }
    }
    get(index) {
        if (index >= 0 && index < this.numbers.length) {
            return this.numbers[index];
        }
    }
}


let list = new List();

list.add(5);
console.log(list.get(0));
//expect(myList.get(0)).to.equal(5, "Element wasn't added");

list.add(3);
console.log(list.get(0));
//expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

list.remove(0);
console.log(list.get(0));
console.log(list.size);
//expect(myList.get(0)).to.equal(5, "Element wasn't removed");
//expect(myList.size).to.equal(1, "Element wasn't removed");