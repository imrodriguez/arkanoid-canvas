function Bola() {
    this.x = width / 2;
    this.y = 100;

    this.gravedad = 5;

    this.mostrar = function() {
        fill(255);
        ellipse(this.x, this.y, 18, 18);
    }

    this.update = function() {
        this.y += this.gravedad;

        if (this.y > height) {
            this.y = height;
            textSize(32);
            text("Has perdido", width / 2 - 100, height / 2);
        }

        if (this.y <= 0) {
            this.gravedad = 5;
        }
    }

    this.rebota = function(obj) {
        if (this.x > obj.x && this.x < (obj.x + obj.width)) {
            if (this.y > obj.y && this.y < (obj.y + obj.height)) {
                return true;
            }
        } else {
            return false;
        }
    }
}
