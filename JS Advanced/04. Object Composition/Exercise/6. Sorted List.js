function sortedList() {
    let collection = (() => {
        let numbers = [];
        let size = 0;


        const add = function (elemenent) {
            numbers.push(elemenent);
            numbers.sort((a, b) => a - b);
            this.size++;
        };
        const remove = function (index) {
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
                numbers.sort((a, b) => a - b);
                this.size--;
            }
        };
        const get = function (index) {
            if (index >= 0 && index < numbers.length) {
                return numbers[index];
            }
        };

        return {
            add,
            remove,
            get,
            size
        }
    })()
    return collection;
}