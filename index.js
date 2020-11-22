class Walker {
  constructor(width, height) {
    this.x = width / 2
    this.y = height / 2
  }

  step() {
    // const stepX = parseInt(random(3)) - 1
    // const stepY = parseInt(random(3)) - 1

    // if (choose === 0) {
    //   this.x++
    // } else if (choose === 1) {
    //   this.x--
    // } else if (choose === 2) {
    //   this.y++
    // } else {
    //   this.y--
    // }

    const stepX = random(-1, 1)
    const stepY = random(-1, 1)

    this.x += stepX
    this.y += stepY
  }

  display() {
    stroke(0)
    point(this.x, this.y)
  }
}

let walker

const randomCounts = new Array(20).fill(0)

function setup() {
  // size(640, 240)
  createCanvas(640, 240)
  // createCanvas(windowWidth, windowHeight)
  // walker = new Walker(windowWidth, windowHeight)
  // background(220)
}

function draw() {
  background(255)
  let index = Math.floor(random(randomCounts.length))
  console.log(index)
  randomCounts[index]++

  stroke(0)
  fill(127)
  let w = width / randomCounts.length

  for (let i = 0; i < randomCounts.length; i++) {
    console.log(i * w, height - randomCounts[i], w - 1, randomCounts[i])
    rect(i * w, height - randomCounts[i], w - 1, randomCounts[i])
  }
  // walker.step()
  // walker.display()
}
