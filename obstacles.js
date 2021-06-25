class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() * 30 + 30);
    }
    draw() {
        if(this.type === "turtle") {
            if(frame % this.randomise === 0) {
                if (this.frameX >= 1){
                    this.frameX = 0;
                } 
                else this.frameX++;
            }
            ctx1.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x,this.y ,this.width,this.height); 
        } else if (this.type === "log") {
            
            /* ctx1.fillRect(this.x, this.y, this.width, this.height); */
            ctx1.drawImage(log, this.x, this.y, this.width, this.height);
        } else {
            /* ctx1.fillRect(this.x, this.y,this.width,this.height); */
            ctx2.drawImage(enemies, 351,550, grid-17, grid -19, this.x-3, this.y - 6, this.width, this.height);
        }
        /* ctx1.fillRect(this.x, this.y, this.width, this.height); */
    }
    update() {
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
            }
        } else {
          if (this.x < 0 - this.width) {
              this.x = canvas.width + this.width;
          }  
        }
       
    }
}

function initObstacles() {
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        enemiesArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid , grid, 1, "enemy"));
    }

    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        enemiesArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid, grid, -5, "enemy"));
    }

    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        enemiesArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid, grid, 2, "enemy"))
    }
    
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, "log"));
    }
    
    for (let i = 0; i < 3; i++) {
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, "turtle"));
    }
}
initObstacles();

function handleObstacles() {
    for (let i = 0; i < enemiesArray.length; i++){
        enemiesArray[i].update();
        enemiesArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();
    }
    for(let i = 0; i < enemiesArray.length; i++) {
        if(collision(character, enemiesArray[i])) {
            console.log("Hit");
            resetGame();
        }
    }

    if(character.y < 250 && character.y > 100) {
        isSafe = false;
        for (let i = 0; i < logsArray.length; i++) {
            if (collision(character, logsArray[i])) {
                character.x += logsArray[i].speed;
                isSafe = true;
            }
        }

        if (!isSafe) {
            for (let i = 0; i < 30; i++) {
                ripplesArray.unshift(new Ripple(character.x, character.y));
            }
            resetGame();
        }
    } 

}