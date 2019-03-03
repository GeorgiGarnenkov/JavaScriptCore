class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    calcArea() {
        return Number(this.width * this.height);
    }
}


let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
