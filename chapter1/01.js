let x = 100
let y = 100
let xspeed = 1
let yspeed = 3.3

function setup() {
  createCanvas(200, 200)
  background(255)
}

function draw() {
  background(255)

  x += xspeed
  y += yspeed

  if (x >= width || x <= 0) {
    xspeed = -xspeed
  }

  if (y >= height || y <= 0) {
    yspeed = -yspeed
  }

  stroke(0)
  fill(175)
  ellipse(x, y, 16, 16)
}
