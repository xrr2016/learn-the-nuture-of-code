class PVector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static add(v1, v2) {
    return new PVector(v1.x + v2.x, v1.y + v2.y)
  }

  static sub(v1, v2) {
    return new PVector(v1.x - v2.x, v1.y - v2.y)
  }

  static mult(v1, v2) {
    return new PVector(v1.x * v2.x, v1.y * v2.y)
  }

  static div(v1, v2) {
    return new PVector(v1.x / v2.x, v1.y / v2.y)
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

  limit(max) {
    const maq = this.mag()
    if (maq > max) {
      this.div(maq)
      this.mult(max)
    }
  }

  random2D() {
    return p5.Vector.random2D()
  }
}

class Mover {
  constructor() {
    this.topSpeed = 10
    this.velocity = new PVector(0, 0)
    this.acceleration = new PVector(0.01, 0.01)
    this.location = new PVector(width / 2, height / 2)
  }

  update() {
    this.acceleration = p5.Vector.random2D()
    this.acceleration.mult(random(2))
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.velocity.limit(this.topSpeed)
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

  let c = PVector.add(new PVector(0, 0), new PVector(3, 4))

  console.log(c)

  mover.update()
  mover.checkEdges()
  mover.display()
}
