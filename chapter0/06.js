class Walker {
  constructor(width, height) {
    this.x = width / 2
    this.y = height / 2
    this.tx = 0
    this.ty = 10000
  }

  step() {
    this.x = map(noise(this.tx), 0, 1, 0, width)
    this.y = map(noise(this.ty), 0, 1, 0, width)

    this.tx += 0.01
    this.ty += 0.01
  }

  display() {
    stroke(0)
    ellipse(this.x, this.y, 16, 16)
  }
}

function setup() {
  createCanvas(640, 360)
  loadPixels()
}

let xoff = 0

for (let x = 0; x < width; x++) {
  let yoff = 0
  for (let y = 0; y < height; y++) {
    let bright = map(noise(xoff, yoff), 0, 1, 0, 255)
    pixels[x + y * width] = color(bright)
    yoff += 0.01
  }
  xoff += 0.01
}

function draw() {
  updatePixels()
}
