


class Character {
    constructor() {
        this.spriteWidth =  250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth / 5 ;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width/2 - this.width/2
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }

    update() {
        /* console.log('update') */
        if (keys["ArrowUp"]) {
            if (this.moving === false) {
                this.y -= grid;
                /* synth.triggerAttackRelease("C4", "8n"); */
                this.moving = true;
            }
        }
        if (keys["ArrowDown"]) {
            if (this.moving === false && this.y < canvas.height - this.height * 2) {
                this.y += grid;
                this.moving = true;
            }
        }
        if (keys["ArrowLeft"]) {
            if (this.moving === false && this.x > this.width) {
                this.x -= grid;
                this.moving = true;
            }
        }
        if (keys["ArrowRight"]) {
            if (this.moving === false && this.x < canvas.width - this.width * 2) {
                this.x += grid;
                this.moving = true;
            }
        }

        if (this.y < 0) {
            scored();
        } 
    }
    
    draw() {
        ctx1.fillStyle = 'green';
        ctx1.fillRect(this.x, this.y, this.width, this.height);
        /* ctx1.drawImage(character, this.x, this.y, this.width, this.height); */
    }

    move() {
        console.log('Moved')
        console.log("Tone.now()")
    }
}

const character = new Character();



