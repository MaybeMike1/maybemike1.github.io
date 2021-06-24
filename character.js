class Character {
    constructor() {
        this.spriteWidth =  250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth / 5 ;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width/2 - this.width/2
        this.y = canvas.height - this.height - 40;
        this.moving = false;
    }

    update() {
        if (keys["ArrowUp"]) {
            ctx1.drawImage(characterSprite, 95 ,490, grid - 17, grid -19, this.x + 1, this.y , this.width + 12, this.height + 1);
            if (this.moving === false) {
                this.y -= grid;
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
            ctx1.drawImage(characterSprite, 815, 170, grid-17, grid -19, this.x + 1, this.y , this.width + 12, this.height + 1);
            if (this.moving === false && this.x > this.width) {
                this.x -= grid;
                this.moving = true;
            }
        }
        if (keys["ArrowRight"]) {
            ctx1.drawImage(characterSprite, 15, 732, grid-17, grid -19, this.x + 1, this.y , this.width + 15, this.height + 1);
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
        //Rest frame for character
        ctx1.drawImage(characterSprite, 15,491, grid-17, grid -19, this.x + 1, this.y , this.width + 12, this.height + 1);
    }

    move() {
        console.log(`Character has moved to coordinate {x: ${character.x}, y: ${character.y}}`);
    }
}

const character = new Character();



