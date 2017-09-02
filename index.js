function Point(x, y) {
  this.x = x;
  this.y = y;

  this.toString = function() {
    return `${this.x}, ${this.y}`;
  };
}

function Side(n) {
  this.length = n
}

function Shape() {
  this.position = new Point(0, 0)
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  this.radius = radius
  this.diameter = function () {
    return this.radius * 2
  }
  this.area = function() {
    return Math.PI * Math.pow(this.radius, 2)
  }
  this.circumference = function() {
    return 2 * Math.PI * this.radius;
  }
}
Circle.prototype = Object.create(Shape.prototype)

function Polygon(sides) {
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.perimeter = function() {
  return this.sides.reduce((sum, side) => {
    return sum += side.length
  }, 0)
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(a, b, c, d) {
  this.sides = [new Side(a), new Side(b), new Side(c), new Side(d)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

function Rectangle(width, height) {
  this.width = width
  this.height = height
  this.sides = [new Side(this.width), new Side(this.height), new Side(this.width), new Side(this.height)]
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  this.width = length
  this.height = length
  this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)]
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.listProperties = function() {
  let properties = []
  for (let key in this) {
    if(this.hasOwnProperty(key)) {
      properties.push(key)
    }
  }

  return properties.join(", ")
}

function Triangle(a, b, c) {
  this.sides = [new Side(a), new Side(b), new Side(c)]
}

Triangle.prototype = Object.create(Polygon.prototype)
