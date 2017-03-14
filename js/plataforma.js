function Plataforma() {
  this.x = width/2;
  this.y = height - 20;
  this.height = 10;
  this.width = 50;

  this.mostrar = function() {
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }

  this.izquierda = function() {
    this.x -= 5;
  }

  this.derecha = function() {
    this.x += 5;
  }
}
