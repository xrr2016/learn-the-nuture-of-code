function setup() {
  createCanvas(640, 360)
}

function draw() {
  let x = randomGaussian() * width
  let y = randomGaussian() * height

  ellipse(x, y, 16, 16)
}
