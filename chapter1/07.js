class PVector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
  }

  sub(vector) {
    this.x -= vector.x
    this.y -= vector.y
  }

  mult(number) {
    this.x *= number
    this.y *= number
  }

  div(number) {
    this.x /= number
    this.y /= number
  }

  mag() {
    return Math.sqrt(this.x ** 2, this.y ** 2)
  }

  normalize() {
    const mag = this.mag()
    if (mag === 0) {
      return
    }
    this.div(mag)
  }
}

class Mover {
  constructor() {
    this.location = new PVector(random(width), random(height))
    this.velocity = new PVector(random(-2, 2), random(-2, 2))
  }

  update() {
    this.location.add(this.velocity)
  }

  display() {
    stroke(0)
    fill(175)
    ellipse(this.location.x, this.location.y, 16, 16)
  }

  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0
    } else if (this.location.x < 0) {
      this.location.x = width
    }

    if (this.location.y > height) {
      this.location.y = 0
    } else if (this.location.y < 0) {
      this.location.y = height
    }
  }
}

let mover

function setup() {
  createCanvas(500, 500)
  smooth()
  mover = new Mover()
}

function draw() {
  background(255)

  mover.update()
  mover.checkEdges()
  mover.display()
}
