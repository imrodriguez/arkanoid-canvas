var plataforma;
var bloques = [];
var bola;

function setup() {
  createCanvas(400,600);
  plataforma = new Plataforma();

  var bloquex = 10;
  var bloquey = 10;

  for (var i = 0; i < 14; i++) {
    bloques.push(new Bloque(bloquex,bloquey));
    if (bloquex > (width-120)) {
      bloquex = 10;
      bloquey += 30;
    }
    else {
      bloquex += 50;
    }
  }

  bola = new Bola();
}

function draw() {
  background(0);
  plataforma.mostrar();
  for (var i = 0; i < bloques.length; i++) {
    bloques[i].mostrar();
  }
  bola.update();
  bola.mostrar();
  rebote();
}

function rebote() {
  if (bola.rebota(plataforma)) {
    bola.gravedad = -5;
  }

  for (var i = 0; i < bloques.length; i++) {
    if (bola.rebota(bloques[i])) {
      bola.gravedad = 5;
      bloques.splice(i,1);
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    plataforma.izquierda();
  }
  if (keyCode === RIGHT_ARROW) {
    plataforma.derecha();
  }
}
