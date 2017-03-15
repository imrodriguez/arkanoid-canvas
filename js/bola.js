function Bola() {
    this.x = width / 2;
    this.y = 100;

    this.dy = 5;
    this.dx = 4;

    this.mostrar = function() {
        fill(255);
        ellipse(this.x, this.y, 18, 18);
    }

    this.update = function() {
        this.y += this.dy;
        this.x += this.dx;

        if (this.y > height) {
            this.y = height;
            this.x = width;
            textSize(32);
            text("Has perdido", width / 2 - 100, height / 2);
        }

        if (this.y <= 0) {
            this.dy = 5;
        }
    }

    this.rebota = function(obj) {
        if (this.x > obj.x-7 && this.x < (obj.x + obj.width)-7) {
            if (this.y > obj.y-7 && this.y < (obj.y + obj.height)-7) {
                return true;
            }
        } else {
            return false;
        }
    }
}
