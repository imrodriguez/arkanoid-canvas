var plataforma;
var bloques = [];
var bola;
var colors = ['#e74c3c','#f1c40f','#2ecc71','#95a5a6','#9b59b6','#2c3e50','#e67e22','#e74c3c','#f1c40f','#2ecc71','#95a5a6','#9b59b6','#2c3e50','#e67e22','#e74c3c','#f1c40f','#2ecc71','#95a5a6','#9b59b6','#2c3e50','#e67e22'];

function setup() {
  createCanvas(400,600);
  plataforma = new Plataforma();

  var bloquex = 30;
  var bloquey = 10;

  for (var i = 0; i < 14; i++) {
    bloques.push(new Bloque(bloquex,bloquey,colors[i]));
    if (bloquex > (width-120)) {
      bloquex = 10;
      bloquey += 20;
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

  keys();

  for (var i = 0; i < bloques.length; i++) {
    bloques[i].mostrar();
  }

  bola.update();
  bola.mostrar();
  rebote();
}

function keys() {
  if (keyIsDown(LEFT_ARROW)) {
    plataforma.izquierda();
  }
  if (keyIsDown(RIGHT_ARROW)){
    plataforma.derecha();
  }
}

function reboteInverso(centro) {
  if (bola.x < centro) {
    bola.dx = 4;
  }
  if (bola.x > centro) {
    bola.dx = -4;
  }
  if (bola.x == centro) {
    bola.dx = 0;
  }
}

function rebote() {
  if (bola.rebota(plataforma)) {
    centro = plataforma.x + (plataforma.width/2);
    reboteInverso(centro);
    bola.dy = -bola.dy;
    bola.dx = -bola.dx;
  }

  if (bola.x == 0 || bola.x == width) {
    bola.dy = bola.dy;
    bola.dx = -bola.dx;
  }

  for (var i = 0; i < bloques.length; i++) {
    if (bola.rebota(bloques[i])) {
      bola.gravedad = 5;
      centro = bloques[i].x + (bloques[i].width/2);
      reboteInverso(centro);
      bola.dy = -bola.dy;
      bola.dx = -bola.dx;
      bloques.splice(i,1);
    }
  }
}
