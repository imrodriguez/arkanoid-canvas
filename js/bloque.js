function Bloque(x,y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 25;

  this.mostrar = function() {
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }
}
