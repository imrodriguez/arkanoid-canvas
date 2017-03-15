function Plataforma() {
    this.x = width / 2;
    this.y = height - 30;
    this.height = 20;
    this.width = 80;

    this.mostrar = function() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    this.izquierda = function() {
        if (this.x < 0) {
            this.x = width;
        } else {
            this.x -= 5;
        }
    }

    this.derecha = function() {
        if (this.x > width) {
            this.x = 0;
        } else {
            this.x += 5;
        }
    }
}
