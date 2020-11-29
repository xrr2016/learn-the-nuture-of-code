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

function setup() {
  createCanvas(500, 500)
  smooth()
}

function draw() {
  background(255)

  let mouse = new PVector(mouseX, mouseY)
  let center = new PVector(width / 2, height / 2)

  mouse.sub(center)

  mouse.normalize()

  mouse.mult(50)

  console.log(mouse.mag())

  translate(width / 2, height / 2)
  line(0, 0, mouse.x, mouse.y)
}
