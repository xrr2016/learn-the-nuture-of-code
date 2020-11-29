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
    this.topSpeed = 5
    this.velocity = new PVector(0, 0)
    this.acceleration = new PVector(0, 0)
    this.location = new PVector(random(width), random(height))
  }

  update() {
    let mouse = new PVector(mouseX, mouseY)
    let dir = PVector.sub(mouse, this.location)

    dir.normalize()
    dir.mult(0.5)

    this.acceleration = dir

    this.velocity.add(this.acceleration)
    this.velocity.limit(this.topSpeed)
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

let movers = new Array(200)

function setup() {
  createCanvas(500, 500)
  smooth()

  for (let i = 0; i < movers.length; i++) {
    movers[i] = new Mover()
  }
}

function draw() {
  background(255)

  for (let i = 0; i < movers.length; i++) {
    movers[i].update()
    movers[i].checkEdges()
    movers[i].display()
  }
}
