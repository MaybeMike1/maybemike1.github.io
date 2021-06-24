class Ripple{
    constructor(x, y) {
        this.x = x + 20;
        this.y = y + 20;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    
    draw() {
        ctx1.fillStyle = 'rgba(150, 150, 150,' + this.opacity + ')';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 4);
        ctx1.fill();
        ctx1.closePath();
    }
    update() {
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.opacity > 0.1) {
            this.opacity -= 0.9;
        }
        if (this.radius > 0.15) {
            this.radius -= 0.14;
        } 
    }
    ripple() {
        if(this.radius < 50) {
            this.radius += 0.5;
            this.x -= 0.1;
            this.y -= 0.1;
        }

        if (this.opacity > 0) {
            this
        }
    }
}

function handleRipples() {    
    for (let i = 0; i < ripplesArray.length; i++) {
        ripplesArray[i].update();
        ripplesArray[i].draw();
    } 
    if (ripplesArray.length > maxParticles) {
        for (let i = 0; i < 30; i++) {
            ripplesArray.pop();
        }
    }

    if (((keys["ArrowLeft"] || keys["ArrowUp"] || keys["ArrowRight"]  || keys["ArrowDown"])) && character.y > 190 && ripplesArray.length < 30 + 10) {
        for (let i = 0; i < 10; i++) {

            ripplesArray.unshift(new Ripple(character.x, character.y));
        }
    }
    for (let i = 0; i < ripplesArray.length; i++) {
        ripplesArray[i].update();
        ripplesArray[i].draw();
    }
    if (ripplesArray.length > 20) {
        for (let i = 0; i < 30; i++) {
            ripplesArray.pop();
        }
    }
}