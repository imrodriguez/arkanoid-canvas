function Bloque(x,y,color) {
  this.x = x;
  this.y = y;
  this.width = 40;
  this.height = 25;
  this.color = color;

  this.mostrar = function() {
    fill(this.color);
    rect(this.x,this.y,this.width,this.height);
  }
}
