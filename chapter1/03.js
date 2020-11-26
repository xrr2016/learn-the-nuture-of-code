class PVector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
  }
}

let myLocation = new PVector(100, 100)
let velocity = new PVector(1, 3.3)

function setup() {
  createCanvas(200, 200)
  background(255)
}

function draw() {
  background(255)

  myLocation.add(velocity)

  if (myLocation.x >= width || myLocation.x <= 0) {
    velocity.x = -velocity.x
  }

  if (myLocation.y >= height || myLocation.y <= 0) {
    velocity.y = -velocity.y
  }

  stroke(0)
  fill(175)
  ellipse(myLocation.x, myLocation.y, 16, 16)
}
