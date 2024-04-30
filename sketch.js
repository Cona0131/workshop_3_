let img = [];
let sculpture, sculpture2, eye, teardrop, apple, waterdrop;

function preload() {
  sculpture = loadImage('images/sculpture.jpeg');
  sculpture2 = loadImage('images/sculpture 2.jpeg');
  eye = loadImage('images/eye.jpeg')
  teardrop = loadImage('images/tear drop.jpeg')

}


function setup() {
  createCanvas(500, 500);
  background(95, 98, 90);

  frameRate(4);
  img.push(sculpture);
  img.push(sculpture2);
  img.push(eye);
  img.push(teardrop);



  

}

function draw() {

  let x = random(sculpture. width);
  let y = random(sculpture. height);
  let c = sculpture. get(int(x), int(y));
  fill(c);
  noStroke();
  circle(x, y, 7);
  square(x, y, 5)

  let m = random(sculpture2. width);
  let n = random(sculpture2. height);
  let o = sculpture2. get(int(m), int(n));
  fill(o);
  noStroke();
  circle(m + 200, n + 150, 12);
  square(m, n, 10)

  let r = random(img)
  image(r, 100, 100);
  tint(150, 80, 100)
}
