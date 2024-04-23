class Circle {

    constructor (radius, color) {

        this.radius = radius;
        this.color = color;
    }

    get circleRadius() {

        return this.radius;
    }
    set circleRadius(radius) {

        this.radius = radius;
    }
    get circleColor() {

        return this.color;
    }
    set circleColor(color) {

        this.color = color;
    }
    get toString() {

        return `"Circle [radius = ${this.radius}, color = ${this.color}]"`
    }
    get circleArea() {

        return (Math.PI * this.radius * this.radius);
    }
    get circleCircumference() {

        return (2 * Math.PI * this.radius);
    }
}

const newCircle = new Circle(1.0, "red"); // circle => radius = 1.0, color = red

console.log(newCircle); // circle - output => Circle { radius: 1, color: 'red' }

console.log(newCircle.circleRadius); // +getRadius - output => 1

newCircle.circleRadius = 3.0 // +setRadius

console.log(newCircle.circleRadius); // +setRadius - output => 3

console.log(newCircle.circleColor); // +getRadius - output => red

newCircle.circleColor = "black" // +setColor

console.log(newCircle.circleColor); // +setColor - output => black

console.log(newCircle.toString); // +getToString - output => "Circle [radius = 3, color = black]"

console.log(newCircle.circleArea); // +getArea - output => 28.274333882308138

console.log(newCircle.circleCircumference); // +getCircumference - output => 18.84955592153876


