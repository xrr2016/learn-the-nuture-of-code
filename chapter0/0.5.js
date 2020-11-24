function montecarlo() {
  while (true) {
    let r1 = random(1)
    let probability = r1
    let r2 = random(1)
    if (r2 < probability) {
      return r1
    }
  }
}

function setup() {
  createCanvas(640, 360)
}

function draw() {
  let x = montecarlo() * width
  let y = montecarlo() * height

  ellipse(x, y, 16, 16)
}
