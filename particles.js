class Particle {
    constructor(x, y) {
        this.x = x + 20;
        this.y = y + 20;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw() {
        ctx3.fillStyle = 'rgba(150,150,150,' + this.opacity +')';
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx3.fill();
        ctx3.closePath();
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
/*     drawRipple() {
        ctx1.strokeStyle= 'rgba(155,155,155, ' + this.opacity + ')';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx1.stroke();
        ctx1.closePath();
    }
    ripple() {
        if (this.radius < 50) {
            this.radius += 0.5;
            this.x -= 0.1;
            this.y -= 0.05;
        }
        if(this.opacity > 0) {
            this.opacity -= 0.005
        }
    } */
}

function handleParticles() { 
    if (((keys["ArrowLeft"] || keys["ArrowUp"] || keys["ArrowRight"]  || keys["ArrowDown"])) && character.y > 250 && particlesArray.length < maxParticles + 10) {
        for (let i = 0; i < 10; i++) {
            
            particlesArray.unshift(new Particle(character.x, character.y));
        }
    }
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    if (particlesArray.length > 20) {
        for (let i = 0; i < 30; i++) {
            particlesArray.pop();
        }
    }

    if((keys["ArrowLeft"] || keys["ArrowUp"] || keys["ArrowRight"]  || keys["ArrowDown"])) {
        for (let i = 0; i < 20; i++) {
            particlesArray.unshift(new Ripple(character.x, character.y)); 
        }
        for(let i = 0; i < enemiesArray.length; i++) {
            if (collistion(character,enemiesArray[i])) {
                resetGame();
            }
        }
    }
}